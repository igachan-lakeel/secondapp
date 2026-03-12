const { prisma, resetDatabase } = require("./testUtils");

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

describe("投稿削除フローのテスト", () => {
  it("投稿を削除して、投稿がリストから消えていることを確認", async () => {
    await page.goto("http://localhost:3000/posts");
    await page.click('text="新規投稿"');
    expect(await page.url()).toContain("http://localhost:3000/posts/create");

    await page.fill('input[name="content"]', "削除する投稿");
    await page.click('text="投稿する"');
    expect(await page.url()).toContain("http://localhost:3000/posts");

    // 投稿リストページへ移動
    await page.goto("http://localhost:3000/posts");
    await page.click('text="削除"', { timeout: 5000 });
    expect(await page.url()).toBe("http://localhost:3000/posts");
    const isVisible = await page.isVisible('text="削除する投稿"');
    expect(isVisible).toBeFalsy();
  });
});
