// Published content and clocks, including US daylight saving and minute updates.
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const base = process.env.BASE ?? 'http://localhost:5190'
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
try {
  for (const [date, us] of [['2026-01-15T12:00:00Z', '7:00 AM'], ['2026-07-15T12:00:00Z', '8:00 AM']]) {
    const page = await browser.newPage({ reducedMotion: 'reduce' })
    await page.clock.install({ time: new Date(date) })
    await page.goto(`${base}/`)
    await page.locator('.sb-clock time').first().waitFor()
    assert.deepEqual(await page.locator('.sb-clock time').allTextContents(), ['8:00 PM', us])
    await page.clock.fastForward(60_000)
    assert.deepEqual(await page.locator('.sb-clock time').allTextContents(), ['8:01 PM', us.replace(':00', ':01')])
    assert.equal(await page.locator('.sb-logo,.sb-pic__check,#showcase,#work a[href="/work/apps"]').count(), 0)
    assert.equal(await page.locator('.sb-badge').textContent(), '9')
    assert.equal(await page.title(), 'Jerremy Beron | AI Automation Specialist')
    assert.equal(await page.locator('link[rel="canonical"]').count(), 0, 'domain is intentionally unset')
    const person = await page.locator('#about script[type="application/ld+json"]').textContent()
    assert.ok(!person.includes('hasCredential') && !person.includes('Your Certification'))
    assert.ok(!(await page.locator('body').innerText()).includes('PLACEHOLDER'))
    await page.keyboard.press('Control+k')
    await page.locator('dialog.search[open]').waitFor()
    assert.equal(await page.locator('#search-showcase,#search-resource').count(), 0)
    assert.equal(await page.locator('#search-services').count(), 1)
    await page.close()
    console.log(`PASS: ${date}: PH/US clocks and minute updates, hidden templates/identity/credential, published count and title`)
  }
} finally {
  await browser.close()
}
