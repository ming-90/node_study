const puppeteer = require('puppeteer');


module.exports = async(req, res, next) => {
    try{
        let pageNum = 1
        var i
        let total = []
        let data = []

        for(i=0; i<3; i++){
            const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
            const page = await browser.newPage();
            let url = 'https://section.blog.naver.com/Search/Post.nhn?pageNo=' + (pageNum + i) + '&rangeType=ALL&orderBy=sim&keyword=%EC%B0%BD%EC%9B%90%EB%A7%9B%EC%A7%91'


            await page.goto(url, { waitUntil: 'networkidle2' })

            data = await page.evaluate(() => Array.from(document.querySelectorAll('.info_post'))
                                                            .map((v, i) => ({
                                                                id : i,
                                                                test : v.querySelector('.name_author').innerHTML,
                                                                test2 : v.querySelector('.author').getAttribute('ng-href')
                                                            })));


            await browser.close();
            total.push(data)
        }
        console.log('data', total);


        res.json({
            data
        });
    }catch(e){
        console.log(e)
    }
}

