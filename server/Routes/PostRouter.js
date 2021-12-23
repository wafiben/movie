const express=require('express');
const router=express.Router();
const {PostMovie,searchMovie}=require('../Controllers/PostController')
const isAuth=require('../midelware/isAuth')
const upload = require('../midelware/uploads');

/* router.get('/',isAuth,getPosts)
router.post('/',isAuth,addPost) */
router.post('/s',PostMovie)
router.post('/',searchMovie)



module.exports=router
