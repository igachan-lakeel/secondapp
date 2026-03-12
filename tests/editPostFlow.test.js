const { prisma, resetDatabase } = require("./testUtils");

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

describe("投稿編集フローのテスト", () => {
  it("投稿を編集して、内容が更新されていることを確認", async () => {
    await page.goto("http://localhost:3000/posts");
    await page.click('text="新規投稿"');
    expect(await page.url()).toContain("http://localhost:3000/posts/create");

    await page.fill('input[name="content"]', "テスト投稿");
    await page.click('text="投稿する"');
    expect(await page.url()).toContain("http://localhost:3000/posts");

    await page.goto("http://localhost:3000/posts");
    await page.click('text="編集"');
    expect(await page.url()).toContain("http://localhost:3000/posts/update");

    await page.fill('input[name="content"]', "更新されたテスト投稿");
    await page.click('text="投稿する"');
    expect(await page.url()).toContain("http://localhost:3000/posts");

    const isVisible = await page.isVisible('text="更新されたテスト投稿"');
    expect(isVisible).toBeTruthy();
  });
});
