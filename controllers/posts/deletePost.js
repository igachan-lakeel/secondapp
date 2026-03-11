//prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 削除処理
module.exports = async(req, res) => {
  try {
    const postId = parseInt(req.params.id, 10);  //パラメータの値はString型のためInt型へ変換
    await prisma.post.delete({ where: {id: postId}}) //指定の投稿を削除
    console.log("データ削除に成功しました");
  } catch (error) {
    console.log("データ削除にエラーがありました")
  }
  res.redirect("/posts"); //トップページへ遷移
}