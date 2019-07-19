import express from 'express'

const router = express.Router()
const asyncHandler = require('express-async-handler')
const puppeteer = require('../../controller/crawling/index');

try{
    //crawing
    //router.get('/test',crawling)
    router.get('/test2',asyncHandler(puppeteer.test))
}catch(e){
    console.log("crawling Err")
}

export default router