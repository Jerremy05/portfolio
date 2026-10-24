// Start Vite first. CHROMIUM_PATH optionally selects a preinstalled browser.
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
const base = process.env.BASE ?? 'http://localhost:5190'
const illustrations = [
  'ai-receptionist', 'asana-crm-lead-engagement', 'social-media-ai-assistant',
  'automated-lead-enrichment', 'gmail-attachment-organizer', 'social-media-content-repurposing',
  'xero-transaction-export-to-asana', 'hr-candidate-review-assistant', 'rag-powered-ai-assistant',
]
let checks = 0
try {
  for (const width of [390, 820, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    for (const theme of ['light', 'dark']) {
      await page.addInitScript((theme) => localStorage.setItem('pv2-theme', theme), theme)
      for (let id = 1; id <= 9; id++) {
        await page.goto(`${base}/work/case-studies/site-${id}`)
        await page.locator('.case-study h1').waitFor()
        assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), theme)
        assert.equal(await page.locator('.case-study h1').count(), 1)
        assert.equal(await page.locator('.case-study__nav a').first().getAttribute('href'), '/work/case-studies')
        const panelMatches = await page.locator('.case-study .panel').first().evaluate((el) => {
          const probe = document.createElement('div')
          probe.style.backgroundColor = 'var(--surface)'
          document.body.append(probe)
          const matches = getComputedStyle(el).backgroundColor === getComputedStyle(probe).backgroundColor
          probe.remove()
          return matches
        })
        assert.ok(panelMatches, `theme surface: ${id}/${width}/${theme}`)
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow: ${id}/${width}/${theme}`)
        const illustration = page.locator('#workflow-illustration img')
        assert.equal(await illustration.count(), 1, 'one illustration for each case study')
        const imagePath = `/images/workflows/${illustrations[id - 1]}-portfolio.png`
        assert.equal(await illustration.getAttribute('src'), imagePath)
        await illustration.scrollIntoViewIfNeeded()
        await page.waitForFunction(() => {
          const image = document.querySelector('#workflow-illustration img')
          return image?.complete && image.naturalWidth > 0
        })
        assert.ok(await illustration.evaluate((image) => {
          const bounds = image.getBoundingClientRect()
          return image.naturalWidth > 1000 && getComputedStyle(image).objectFit === 'contain'
            && Math.abs(bounds.height - bounds.width * image.naturalHeight / image.naturalWidth) < 1
        }), 'the full illustration loads without cropping')
        assert.equal(await page.locator('.workflow-illustration__frame').evaluate((element) => element.tagName), 'BUTTON')
        assert.equal(await page.locator('.workflow-illustration__frame').getAttribute('aria-haspopup'), 'dialog')
        const inputs = page.locator('.calculator input')
        assert.equal(await inputs.count(), 3)
        await inputs.nth(0).fill('120')
        await inputs.nth(1).fill('5')
        await inputs.nth(2).fill('15')
        assert.equal(await page.locator('#hours-result').textContent(), '10 hours')
        assert.equal(await page.locator('#value-result').textContent(), '$150')
        checks++
        if (id === 9) console.log(`PASS: ${width}px ${theme}`)
      }
    }
    assert.deepEqual(errors, [])
    await page.close()
  }
  // The same generated section and stylesheet must work on every standalone demo.
  const demo = await browser.newPage({ viewport: { width: 390, height: 844 } })
  for (let id = 1; id <= 9; id++) {
    await demo.goto(`${base}/demos/sites/site-${id}.html`)
    const image = demo.locator('#workflow-illustration img')
    await image.scrollIntoViewIfNeeded()
    await demo.waitForFunction(() => document.querySelector('#workflow-illustration img')?.naturalWidth > 0)
    assert.equal(await image.getAttribute('src'), `/images/workflows/${illustrations[id - 1]}-portfolio.png`)
    assert.equal(await image.evaluate((image) => getComputedStyle(image).objectFit), 'contain')
    assert.ok(await demo.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
  }
  await demo.close()
  const page = await browser.newPage({ reducedMotion: 'reduce' })
  await page.goto(`${base}/work/case-studies`)
  const card = page.locator('.sh__link[href="/work/case-studies/site-1"]')
  await card.click()
  await page.locator('.case-study h1').waitFor()
  const previousTheme = await page.evaluate(() => document.documentElement.dataset.theme)
  await page.getByRole('switch', { name: 'Dark mode' }).click()
  const selectedTheme = await page.evaluate(() => document.documentElement.dataset.theme)
  assert.notEqual(selectedTheme, previousTheme)
  await page.reload()
  await page.locator('.case-study h1').waitFor()
  assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), selectedTheme)
  assert.equal((await page.context().pages()).length, 1)
  await page.goBack()
  await page.locator('dialog[open]').waitFor()
  await page.goForward()
  await page.locator('.case-study h1').waitFor()
  await page.getByRole('link', { name: 'Back to projects' }).click()
  await page.locator('dialog[open]').waitFor()
  console.log(`PASS: ${checks} project/viewport/theme combinations, complete illustrations, standalone demos, calculators, same-tab navigation, Back/Forward, and return to projects`)
} finally {
  await browser.close()
}
