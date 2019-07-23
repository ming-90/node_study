const puppeteer = require('puppeteer');


module.exports = async(req, res, next) => {

    try{
        let pageNum = 1
        //let iframe
        //let iframe_body
        var i
        var j
        let searchList = []
        let blogList = []

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        for(i=0; i<5; i++){

            const url = 'https://section.blog.naver.com/Search/Post.nhn?pageNo=' + (i+1) + '&rangeType=ALL&orderBy=sim&keyword=%EC%B0%BD%EC%9B%90%EB%A7%9B%EC%A7%91'

            await page.goto(url,{waitUntil: 'networkidle2'})
            //await page.goto('http://localhost:63479');
            await page.screenshot({path:'./test.png', fullPage:true})


            blogList = await page.evaluate((num) => {
                iframe = document.querySelectorAll('.info_post'),
                iframe_length = iframe.length
                let blog = []
                for(j=0; j<iframe_length; j++){
                    iframe_body = iframe[j].querySelector('.author').getAttribute('ng-href')
                    blog.push(iframe_body.split('/')[3])
                }
                return {
                    page : num + 1,
                    id : blog
                }
            },i)
            searchList.push(blogList)
        }
        console.log(searchList);
        res.json({ result : "OK"})

     }catch(e){
        console.log(e)
    }
}

