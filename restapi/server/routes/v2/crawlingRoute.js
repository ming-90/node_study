import express from 'express'

const router = express.Router()
const asyncHandler = require('express-async-handler')
const crawlingIndex = require('../../controller/crawling/index');

try{
    //crawing
    router.post('/blog',asyncHandler(crawlingIndex.blogCrawling))
}catch(e){
    console.log("crawling Err")
}

export default router