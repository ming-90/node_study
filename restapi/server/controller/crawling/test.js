import request from 'request'
import cheerio from 'cheerio'
import sanitizeHtml from 'sanitize-html'

const crawling = (req, res, next) => {
    try{
        console.log("start")
        let requestOptions = {
            method:"GET",
            //uri:'http://bbs.ruliweb.com/',
            uri:'https://blog.naver.com/goinghigher',
            headers:{'Content-Type':'text/html; charset=utf-8'}
        }
        request(requestOptions, function(err,res, body){
            if(err) console.log(err)
            let $ = cheerio.load(body)

            console.log(body)
            const $articleList = $('')
            console.log($articleList.html())

            //const $articleInfo = $articleList
            //console.log($articleInfo.html())
            //console.log($articleInfo.length)

            //let title = $articleInfo.text()

            //title = replaceAll(title, '\t', '')
            //title = replaceAll(title, '\r\n', '')
            //console.log(title)

        })
        
        res.json({errCode:'1', errMessage:"확인"})
    }catch(e){
        res.json({errCode:'1', errMessage:e})
    }
}

//리플레이스 함수
const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
}

export{
    crawling
}