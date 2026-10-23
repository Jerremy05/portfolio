// Published projects: chapter sheet, metadata, focus/scroll lock and browser history.
import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:5190'
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
try {
  for (const [width, theme] of [[1440, 'dark'], [1280, 'light'], [390, 'dark']]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    await page.addInitScript((theme) => localStorage.setItem('pv2-theme', theme), theme)
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(`${BASE}/#work`)
    const tile = page.locator('#work .wb__tile')
    await tile.first().waitFor()
    assert.equal(await tile.count(), 1, 'only the published chapter is shown')
    assert.equal(await tile.getAttribute('href'), '/work/case-studies')
    await tile.click()
    await page.waitForFunction(() => document.querySelector('dialog.sh')?.open)
    assert.equal(new URL(page.url()).pathname, '/work/case-studies')
    assert.match(await page.title(), /^Automation Projects: 9/)
    assert.equal(await page.locator('.sh__link').count(), 9)
    assert.equal(await page.locator('.sh__next').count(), 0, 'hidden templates are not suggested as next chapters')
    assert.equal(await page.locator('link[rel="canonical"]').count(), 0, 'no invented canonical domain')
    assert.equal(await page.locator('meta[name="description"]').count(), 1)
    assert.equal(await page.evaluate(() => document.documentElement.dataset.scrollLocked), 'true')
    assert.ok(await page.locator('dialog.sh').evaluate((dialog) => dialog.contains(document.activeElement)), 'focus moves into the sheet')
    const data = await page.locator('script[type="application/ld+json"]').allTextContents()
    assert.ok(data.some((text) => JSON.parse(text).mainEntity?.numberOfItems === 9))
    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('dialog.sh')?.open)
    assert.equal(new URL(page.url()).pathname, '/')
    assert.equal(await page.evaluate(() => document.documentElement.dataset.scrollLocked), undefined)
    await tile.click()
    await page.waitForFunction(() => document.querySelector('dialog.sh')?.open)
    await page.goBack()
    await page.waitForFunction(() => !document.querySelector('dialog.sh')?.open)
    await page.goForward()
    await page.waitForFunction(() => document.querySelector('dialog.sh')?.open)
    await page.locator('.sh__close').click()
    await page.waitForFunction(() => !document.querySelector('dialog.sh')?.open)
    await page.goto(`${BASE}/work/case-studies`)
    await page.waitForFunction(() => document.querySelector('dialog.sh')?.open)
    await page.locator('.sh__close').click()
    await page.waitForFunction(() => location.pathname === '/' && !document.querySelector('dialog.sh')?.open)
    await page.goto(`${BASE}/work/apps`)
    await page.waitForFunction(() => location.pathname === '/')
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    assert.deepEqual(errors, [])
    await page.close()
    console.log(`PASS: ${width}px ${theme}: published chapter, metadata, focus, lock, Escape, Back/Forward, direct visits, hidden apps`)
  }
} finally {
  await browser.close()
}
