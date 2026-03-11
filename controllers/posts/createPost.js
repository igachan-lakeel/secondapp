const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 投稿処理
module.exports = async(req, res) => {
  const { content } = req.body;

  try {
    if (!content || !content.trim()) {
      console.log("データ登録にエラーがありました");
      return res.status(400).send({message: 'Content cannot be empty'});
    }

    await prisma.post.create({data: {content: req.body.content}});
    console.log("データ登録に成功しました");
    res.redirect("/posts"); //トップページへ遷移するコードをこちらに移動しました
  } catch(error) {
    console.log("データ登録にエラーがありました");
    console.log(error);
    return res.status(400).send({message: error.message});
  }
}
