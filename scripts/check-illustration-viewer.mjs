// Same-page viewer: zoom/pan, native focus trapping, dismissal and page restoration.
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const base = process.env.BASE ?? 'http://localhost:5190'
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
try {
  for (const [width, theme, path] of [
    [1440, 'dark', '/work/case-studies/site-1'],
    [390, 'light', '/work/case-studies/site-3'],
    [320, 'dark', '/work/case-studies/site-9'],
    [390, 'light', '/demos/sites/site-2.html'],
  ]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce', hasTouch: width < 1000 })
    await page.addInitScript((theme) => localStorage.setItem('pv2-theme', theme), theme)
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(base + path)
    const opener = page.locator('.workflow-illustration__frame')
    const viewer = page.locator('#workflow-illustration-viewer')
    await viewer.waitFor({ state: 'attached' })
    await opener.scrollIntoViewIfNeeded()
    const url = page.url()
    const before = await page.evaluate(() => ({ y: scrollY, overflow: document.documentElement.style.overflow }))
    await opener.click()
    await page.waitForFunction(() => document.querySelector('#workflow-illustration-viewer')?.open)
    await page.waitForFunction(() => document.querySelector('.illustration-viewer__image')?.naturalWidth > 0)
    assert.equal(page.url(), url)
    assert.equal(page.context().pages().length, 1, 'no new tab')
    assert.equal(await page.evaluate(() => document.documentElement.style.overflow), 'hidden')
    assert.ok(await viewer.evaluate((dialog) => dialog.contains(document.activeElement)))
    const fit = await viewer.locator('img').evaluate((image) => image.getBoundingClientRect().width)
    await viewer.getByRole('button', { name: 'Zoom in', exact: true }).click()
    await viewer.getByRole('button', { name: 'Zoom in', exact: true }).click()
    const zoomed = await viewer.locator('img').evaluate((image) => image.getBoundingClientRect().width)
    assert.ok(zoomed > fit * 2)
    const stage = viewer.locator('.illustration-viewer__stage')
    await stage.evaluate((element) => { element.scrollLeft = 150; element.scrollTop = 100 })
    assert.ok(await stage.evaluate((element) => element.scrollLeft > 0), 'zoomed image can be panned')
    await viewer.getByRole('button', { name: 'Fit', exact: true }).click()
    assert.ok(Math.abs(await viewer.locator('img').evaluate((image) => image.getBoundingClientRect().width) - fit) < 1)
    await viewer.getByRole('button', { name: 'Close illustration' }).click()
    await page.waitForFunction(() => !document.querySelector('#workflow-illustration-viewer').open && document.documentElement.style.overflow !== 'hidden')
    assert.equal(await opener.evaluate((button) => button === document.activeElement), true)
    assert.equal(await page.evaluate(() => document.documentElement.style.overflow), before.overflow)
    assert.ok(Math.abs(await page.evaluate(() => scrollY) - before.y) < 3, 'page position restored')
    await opener.click()
    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('#workflow-illustration-viewer').open)
    await opener.click()
    await page.mouse.click(0, 0)
    await page.waitForFunction(() => !document.querySelector('#workflow-illustration-viewer').open)
    assert.deepEqual(errors, [])
    await page.close()
    console.log(`PASS: ${width}px ${theme} ${path}: same-tab overlay, zoom/pan, fit, focus/scroll restoration, Close/Escape/backdrop`)
  }
} finally { await browser.close() }
