import puppeteer from 'puppeteer'

module.exports = async(req, res, next) => {

    try{
        let i
        let j
        //블로그 아이디, 주소 수집
        let searchList = []

        let blogList = []
        let url
        let nextUrl

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log('Start Crawling')
        for(i=0; i<5; i++){

            //검색한 내용으로 블로그 아이디 수집(페이지당 7개 5페이지까지)
            url = 'https://section.blog.naver.com/Search/Post.nhn?pageNo=' + (i+1) + '&rangeType=ALL&orderBy=sim&keyword=%EC%B0%BD%EC%9B%90%EB%A7%9B%EC%A7%91'

            await page.goto(url,{waitUntil: 'networkidle2'})

            blogList = await page.evaluate((num) => {
                iframe = document.querySelectorAll('.info_post'),
                iframe_length = iframe.length
                let blogAddr = []
                let blogId = []
                for(j=0; j<iframe_length; j++){
                    //블로그 작성자의 별명이 있는 태그에서 블로그 주소 존재
                    iframe_body = iframe[j].querySelector('.author').getAttribute('ng-href')
                    blogAddr.push(iframe_body)
                    blogId.push(iframe_body.split('/')[3])
                }
                return {
                    page : num + 1,
                    Addr : blogAddr,
                    id : blogId
                }
            },i)
            searchList.push(blogList)
        }
        //console.log(searchList)

        for(i=0; i<5; i++){
            //블로그 방문자수 수집
            let totalList = []
            let todayList = []
            let blogId = searchList[i]['id']
            for(j=0; j<blogId.length; j++){
                //모바일 버전에만 total, total이 있기때문에 모바일 버전으로 열어줌
                nextUrl = "https://m.blog.naver.com/" + blogId[j]
                console.log(nextUrl)

                await page.goto(nextUrl,{waitUntil: 'networkidle2'})

                blogList = await page.evaluate(() => {
                    //count 클래스에 today, total 전부 존재
                    visitor = document.querySelector('.count').textContent.split(' ')

                    return visitor
                })
                totalList.push(blogList[4].replace(/,/g,''))
                todayList.push(blogList[1].replace(/,/g,''))
            }
            searchList[i].total = totalList
            searchList[i].today = todayList
        }
        console.log(searchList)
        res.json({ result : "OK"})

     }catch(e){
        console.log(e)
    }
}

