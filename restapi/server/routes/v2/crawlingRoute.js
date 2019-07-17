import express from 'express'
import crawling from '../../controller/crawling/test'

const router = express.Router()

try{
    //crawing
    router.get('/test',crawling)
}catch(e){
    console.log("crawling Err")
}

export default router