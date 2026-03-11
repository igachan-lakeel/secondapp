//prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 更新画面表示
module.exports = async(req, res) => {
  const postId = parseInt(req.params.id, 10);  //パラメータの値はString型のためInt型へ変換
  const post = await prisma.post.findUnique({where: { id: postId}}) //指定の投稿を取得
  res.render("posts/updateGet", {post})
}