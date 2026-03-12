const { prisma, resetDatabase } = require("./testUtils");

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

const { createPost } = require("./createPost");

describe("投稿編集フローのテスト", () => {
  it("投稿を編集して、内容が更新されていることを確認", async () => {
    const originalContent = "編集する投稿";
    const updatedContent = "更新された投稿内容";

    await createPost(page, originalContent);

    const editButton = await page.$(".right-content .btn");
    await editButton.click();

    await page.fill('input[name="content"]', updatedContent);
    await page.click('text="投稿する"');
    await page.waitForSelector(`text="${updatedContent}"`);

    const isVisible = await page.isVisible(`text="${updatedContent}"`);
    expect(isVisible).toBeTruthy();
  });
});
