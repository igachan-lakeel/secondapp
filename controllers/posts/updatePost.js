//prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 更新処理
module.exports = async(req, res) => {
  try {
    const postId = parseInt(req.params.id, 10);  //パラメータの値はString型のためInt型へ変換
    await prisma.post.update({where: {id: postId}, data: {content: req.body.content}})  //更新処理。引数のdataは、data: req.bodyでも可
    console.log("データ更新に成功しました");
  }catch(error){
    console.log("データ更新にエラーがありました")
  }
  res.redirect("/posts"); //トップページへ遷移
}