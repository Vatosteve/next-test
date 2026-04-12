import { test, expect } from '@playwright/test'

/**
 * Settings page (/settings) tests.
 *
 * Covers page load, heading, nav presence, page title, and console errors.
 */

test.describe('Settings page', () => {
  test('loads without errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/settings')
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })

  test('renders the Settings heading', async ({ page }) => {
    await page.goto('/settings')
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible()
  })

  test('nav is present on the page', async ({ page }) => {
    await page.goto('/settings')
    await expect(page.locator('nav')).toBeVisible()
  })

  test('has a valid page title', async ({ page }) => {
    await page.goto('/settings')
    await expect(page).toHaveTitle(/My App/i)
  })

  test('page renders within 3 seconds', async ({ page }) => {
    const start = Date.now()
    await page.goto('/settings')
    await page.waitForLoadState('domcontentloaded')
    expect(Date.now() - start).toBeLessThan(3000)
  })
})
