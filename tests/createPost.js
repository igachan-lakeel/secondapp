async function createPost(page, content) {
  await page.goto("http://localhost:3000/posts");
  await page.click('text="新規投稿"');
  expect(await page.url()).toContain("http://localhost:3000/posts/create");

  await page.fill('input[name="content"]', content);
  await page.click('text="投稿する"');
  expect(await page.url()).toContain("http://localhost:3000/posts");

  const isVisible = await page.isVisible(`text="${content}"`);
  expect(isVisible).toBeTruthy();
}

module.exports = { createPost };
