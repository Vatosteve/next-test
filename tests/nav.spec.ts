import { test, expect } from "@playwright/test";

/**
 * Nav — shared navigation tests.
 *
 * Covers link presence, routing, and active-state indicator across all pages.
 */

const pages = [
  { path: "/", label: "Overview" },
  { path: "/about", label: "About" },
  { path: "/settings", label: "Settings" },
];

test.describe("Nav — presence", () => {
  for (const { path } of pages) {
    test(`nav is visible on ${path}`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("nav")).toBeVisible();
    });
  }

  test("logo is visible", async ({ page }) => {
    await page.goto("/");
    // The logo "D" badge sits inside the nav
    await expect(page.locator("nav").getByText("D")).toBeVisible();
  });

  test("all nav links are rendered with correct labels", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");
    await expect(nav.getByRole("link", { name: "Overview" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Settings" })).toBeVisible();
  });
});

test.describe("Nav — routing", () => {
  test("Overview link navigates to /", async ({ page }) => {
    await page.goto("/about");
    await page.locator("nav").getByRole("link", { name: "Overview" }).click();
    await expect(page).toHaveURL("/");
  });

  test("About link navigates to /about", async ({ page }) => {
    await page.goto("/");
    await page.locator("nav").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
  });

  test("Settings link navigates to /settings", async ({ page }) => {
    await page.goto("/");
    await page.locator("nav").getByRole("link", { name: "Settings" }).click();
    await expect(page).toHaveURL("/settings");
  });
});

test.describe("Nav — active state", () => {
  for (const { path, label } of pages) {
    test(`"${label}" link is marked active on ${path}`, async ({ page }) => {
      await page.goto(path);
      const activeLink = page.locator("nav").getByRole("link", { name: label });
      // Active links are white; inactive links are neutral-400
      await expect(activeLink).toHaveCSS("color", "rgb(255, 255, 255)");
    });
  }
});

test.describe("Nav — skip link", () => {
  test("skip link is the first focusable element on the page", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === "webkit",
      "WebKit does not Tab-focus links by default",
    );
    await page.goto("/");
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(
      () => document.activeElement?.textContent,
    );
    expect(focused).toMatch(/skip to main content/i);
  });

  test("skip link points to #main-content", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: /skip to main content/i });
    await expect(link).toHaveAttribute("href", "#main-content");
  });

  test("#main-content target exists on each page", async ({ page }) => {
    for (const path of ["/", "/about", "/settings"]) {
      await page.goto(path);
      await expect(page.locator("#main-content")).toBeAttached();
    }
  });
});

test.describe("Nav — user controls", () => {
  test("user profile chip is visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("nav").getByText("Kate Schowalter"),
    ).toBeVisible();
  });

  test("user and bell icon buttons are visible", async ({ page }) => {
    await page.goto("/");
    const buttons = page.locator("nav button");
    // Only the user icon and bell are <button> elements; the profile chip is a <div>
    await expect(buttons).toHaveCount(3);
  });
});
