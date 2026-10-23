// Actual clipboard copy, mailto link, feedback reset, narrow layouts and denied access.
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const base = process.env.BASE ?? 'http://localhost:5190'
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
try {
  for (const [width, theme, path] of [[1440, 'dark', '/contact'], [390, 'light', '/'], [320, 'dark', '/contact']]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: base })
    await context.addInitScript((theme) => localStorage.setItem('pv2-theme', theme), theme)
    const page = await context.newPage()
    await page.goto(base + path)
    const email = page.locator('.ct-email .ct-mail')
    await email.waitFor()
    const address = (await email.textContent()).trim()
    const href = new URL(await email.getAttribute('href'))
    assert.equal(href.protocol, 'mailto:')
    assert.equal(href.pathname, address)
    const before = page.url()
    await page.clock.install()
    const copy = page.getByRole('button', { name: 'Copy email address', exact: true })
    await copy.click()
    await page.waitForFunction(() => document.querySelector('.ct-copy-status').textContent === 'Copied!')
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), address)
    assert.equal(page.url(), before, 'copy does not launch mail or navigate')
    assert.equal(await copy.evaluate((el) => el.offsetHeight), 44)
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px: no overflow`)
    await page.clock.fastForward(2600)
    await page.waitForFunction(() => document.querySelector('.ct-copy-status').textContent === '')
    // A rejected clipboard write must not claim success; the email link remains available.
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: async () => { throw new DOMException('Denied', 'NotAllowedError') } },
    }))
    await copy.click()
    await page.waitForFunction(() => document.querySelector('.ct-copy-status').textContent.includes('manually'))
    assert.ok(!(await page.locator('.ct-copy-status').textContent()).includes('Copied!'))
    assert.equal(await email.getAttribute('href'), href.href)
    await context.close()
    console.log(`PASS: ${width}px ${theme} ${path}: mailto, actual clipboard, feedback/reset, permission failure and layout`)
  }
} finally {
  await browser.close()
}
