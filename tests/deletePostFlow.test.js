const { prisma, resetDatabase } = require("./testUtils");

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

const { createPost } = require("./createPost");

describe("投稿削除フローのテスト", () => {
  it("投稿を削除して、投稿がリストから消えていることを確認", async () => {
    await createPost(page, "削除する投稿");
    const postContentToDelete = "削除する投稿";

    const postToDelete = await page.$(
      `.post-content:text("${postContentToDelete}")`,
    );

    const postElement = await postToDelete.evaluateHandle((element) =>
      element.closest(".post"),
    );
    await postElement.$eval("form .btn", (button) => button.click());
    await page.waitForSelector(`.post-content:text("${postContentToDelete}")`, {
      state: "detached",
    });

    const isVisible = await page.isVisible(
      `.post-content:text("${postContentToDelete}")`,
    );
    expect(isVisible).toBeFalsy();
  });
});
