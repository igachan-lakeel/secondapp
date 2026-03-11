const { prisma, resetDatabase } = require("./testUtils");

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

describe("新規投稿フローのテスト", () => {
  it("新規投稿ページへの遷移をテストする", async () => {
    await page.goto("http://localhost:3000/posts");
    await page.click('text="新規投稿"');

    expect(await page.url()).toContain("http://localhost:3000/posts/create");

    await page.fill('input[name="content"]', "テスト投稿");
    await page.click('text="投稿する"');

    expect(await page.url()).toBe("http://localhost:3000/posts");

    const isVisible = await page.isVisible('text="テスト投稿"');
    expect(isVisible).toBe(true);
  });
});
