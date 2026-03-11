//prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 投稿一覧（トップページ）表示
module.exports = async(req, res) => {
  const posts =  await prisma.post.findMany(); //全ての投稿を取得
  res.render("posts/allPosts", {posts})
}