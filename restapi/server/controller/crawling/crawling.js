const puppeteer = require('puppeteer');


module.exports = async(req, res, next) => {
    try{
        let url = 'https://section.blog.naver.com/Search/Post.nhn?pageNo=1&rangeType=ALL&orderBy=sim&keyword=%EC%B0%BD%EC%9B%90%EB%A7%9B%EC%A7%91',
            data = [];

        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'networkidle2' })

        data = await page.evaluate(() => Array.from(document.querySelectorAll('.info_post'))
                                                            .map((v, i) => ({
                                                                id : i,
                                                                test : v.querySelector('.name_author').innerHTML,
                                                                test2 : v.querySelector('.author').getAttribute('ng-href')
                                                            })));


        await browser.close();

        console.log('data', data);

        res.json({
            url : url,
            data
        });
    }catch(e){
        console.log(e)
    }
}

