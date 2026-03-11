describe("Google検索ページ", () => {
  it("訪れたサイトのタイトルがGoogleであることを確認する", async () => {
    await page.goto("https://www.google.com");
    await expect(page.title()).resolves.toMatch("Google");
  });
});
