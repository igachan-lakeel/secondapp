//ルーティングファイル
const express = require('express');
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts');
const createGet = require('../controllers/posts/createGet');
const createPost = require('../controllers/posts/createPost');
const updateGet = require('../controllers/posts/updateGet');
const updatePost = require('../controllers/posts/updatePost');
const deletePost = require('../controllers/posts/deletePost');

//リクエストに対するアクション(実行処理)を定義
router.get('/posts', allPosts);               //投稿一覧表示
router.get('/posts/create', createGet);       //投稿画面表示
router.post('/posts/create', createPost);     //投稿処理
router.get('/posts/update/:id', updateGet);   //編集画面表示
router.post('/posts/update/:id', updatePost); //編集処理
router.post('/posts/delete/:id', deletePost); //削除処理

module.exports = router;
