import { test, expect } from '@playwright/test'

/**
 * About page (/about) tests.
 *
 * Covers page load, heading, nav presence, page title, and console errors.
 */

test.describe('About page', () => {
  test('loads without errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/about')
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })

  test('renders the About heading', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
  })

  test('nav is present on the page', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('nav')).toBeVisible()
  })

  test('has a valid page title', async ({ page }) => {
    await page.goto('/about')
    await expect(page).toHaveTitle(/My App/i)
  })

  test('page renders within 3 seconds', async ({ page }) => {
    const start = Date.now()
    await page.goto('/about')
    await page.waitForLoadState('domcontentloaded')
    expect(Date.now() - start).toBeLessThan(3000)
  })
})
