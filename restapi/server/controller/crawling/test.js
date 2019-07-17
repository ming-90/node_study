const crawling = (req, res, next) => {
    try{
        console.log("TEST")
    }catch(e){
        res.json({errCode:'1', errMessage:e})
    }
}

export{
    crawling
}