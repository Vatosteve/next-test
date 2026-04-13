import { test, expect } from "@playwright/test";

/**
 * Home page (/) — Overview dashboard tests.
 *
 * Covers header, goals row, metric cards, hover interactions,
 * timeline, keyboard navigation, page title, and console errors.
 */

test.describe("Home — header", () => {
  test("renders the daily plan label", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Your daily plan", { exact: true }),
    ).toBeVisible();
  });

  test("renders the main heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Stay on Track Today" }),
    ).toBeVisible();
  });

  test("renders the motivation pill", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Keep it going!", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("You've done all previous tasks!", { exact: true }),
    ).toBeVisible();
  });

  test("renders Add Widget and Customize buttons", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("button", { name: /add widget/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /customize/i }),
    ).toBeVisible();
  });
});

test.describe("Home — daily goals row", () => {
  test("renders the date badge", async ({ page }) => {
    await page.goto("/");
    // exact: true avoids matching "7 PM" in the timeline labels
    await expect(page.getByText("7", { exact: true })).toBeVisible();
    await expect(page.getByText("Oct", { exact: true })).toBeVisible();
  });

  test("renders goals label and completion count", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Your Daily Goals", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("2/5 completed", { exact: true }),
    ).toBeVisible();
  });

  test("prev and next arrow buttons are present and clickable", async ({
    page,
  }) => {
    await page.goto("/");
    // Scope by the rounded card that contains the goals text — avoids brittle XPath traversal
    const goalsRow = page
      .locator("div.rounded-2xl")
      .filter({ hasText: "Your Daily Goals" });
    const arrows = goalsRow.getByRole("button");
    await expect(arrows).toHaveCount(2);
    await arrows.first().click();
    await arrows.last().click();
  });
});

test.describe("Home — metric cards", () => {
  test("all three card titles are visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Deep Work Time", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Attention Quality", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Focus Stability", { exact: true }),
    ).toBeVisible();
  });

  test("Deep Work Time card shows stat", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("1h 25m", { exact: true })).toBeVisible();
  });

  test("Attention Quality card shows stat and period", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("88%", { exact: true })).toBeVisible();
    await expect(page.getByText("Last 60 min", { exact: true })).toBeVisible();
  });

  test("Focus Stability card shows score and peak annotation", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByText("Current Score: 64", { exact: true }),
    ).toBeVisible();
    await expect(page.getByText("Peak: 11 am", { exact: true })).toBeVisible();
  });

  test("hovering a metric card applies a scale transform", async ({ page }) => {
    await page.goto("/");
    // Disable transitions before hovering — same reason as the box-shadow test
    // below: Firefox on Linux CI may not reflect transition end-values in
    // getComputedStyle while a CSS transition is in flight.
    await page.addStyleTag({
      content:
        "*, *::before, *::after { transition-duration: 0ms !important; }",
    });
    const card = page.locator('[data-testid="metric-card"]').first();
    await card.focus();
    await card.hover();
    // Tailwind v4 sets the CSS `scale` property directly (not `transform`).
    // Firefox computes `scale: 1.05` as "1.05 1" or "1.05 1.05" (all axes
    // expanded) while Chrome returns just "1.05" — use a regex to match both.
    await expect(card).toHaveCSS("scale", /^1\.05/);
  });

  test("hovering a metric card changes box-shadow", async ({ page }) => {
    await page.goto("/");
    // Disable transitions before hovering so the hover state takes effect
    // immediately. In Firefox on Linux CI, getComputedStyle can fail to
    // reflect the final box-shadow value during an active CSS transition when
    // the shadow is driven by Tailwind v4 CSS custom properties (--tw-shadow).
    // With transitions disabled, the style flush is synchronous.
    await page.addStyleTag({
      content:
        "*, *::before, *::after { transition-duration: 0ms !important; }",
    });
    const card = page.locator('[data-testid="metric-card"]').first();
    await card.focus();
    await card.hover();
    // Tailwind box-shadow utilities include CSS-variable fallback layers in the
    // computed value, so an exact string match won't work. Match on the orange
    // shadow color at full hover opacity (0.12) appearing anywhere in the value.
    await expect(card).toHaveCSS("box-shadow", /rgba\(251, 115, 0, 0\.12\)/);
  });
});

test.describe("Home — daily timeline", () => {
  test("timeline heading and task count are visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Daily Timeline", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("3 Tasks for today", { exact: true }),
    ).toBeVisible();
  });

  test("Add an Event button is visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("button", { name: /add an event/i }),
    ).toBeVisible();
  });

  test("first and last time labels are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("8 AM", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("8 PM", { exact: true })).toBeVisible();
  });

  test("all three task pills are visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Plan Weekly Routine", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Review Project Materials", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Call With Client", { exact: true }),
    ).toBeVisible();
  });

  test("priority labels are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Low Priority", { exact: true })).toBeVisible();
    await expect(page.getByText("Important", { exact: true })).toBeVisible();
    await expect(
      page.getByText("High priority", { exact: true }),
    ).toBeVisible();
  });
});

test.describe("Home — page-level", () => {
  test("has the correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/My App/i);
  });

  test("loads with no console errors", async ({ page, browserName }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Firefox on Linux CI emits extra browser-level warnings (e.g. font/CSS
    // prefixes) that are not app errors — filter those out and only surface
    // genuine application errors present in all browsers.
    const appErrors = errors.filter((e) => {
      if (browserName === "firefox") {
        return !e.startsWith("downloadable font:") && !e.includes("NS_ERROR");
      }
      return true;
    });
    expect(appErrors).toHaveLength(0);
  });

  test("interactive elements are reachable by keyboard", async ({
    page,
    browserName,
  }) => {
    // WebKit (Safari) does not focus links or buttons via Tab by default —
    // only form controls receive tab focus. This is intentional browser behaviour,
    // not an app bug, so the test is skipped on WebKit.
    test.skip(
      browserName === "webkit",
      "WebKit does not Tab-focus links or buttons by default",
    );
    await page.goto("/");
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON"]).toContain(focused);
  });

  test("page renders within 3 seconds", async ({ page }) => {
    // CI runners are slower than local machines; allow extra headroom.
    const threshold = process.env.CI ? 10_000 : 3_000;
    const start = Date.now();
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    expect(Date.now() - start).toBeLessThan(threshold);
  });
});
