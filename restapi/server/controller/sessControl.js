//세션 테스트
const sesstest = (req, res, next) => {
    let sess;
    sess = req.session;
    sess.userId = "minki"
    sess.pass = "123qwe";
    res.json({id:sess.userId, pass: sess.pass})
}
//쿠키 테스트
const cookietest = (req, res, next) => {
    let counter;
    counter = req.cookies.counter || 0;
    counter ++
    res.cookie('counter','test',{
        maxAge:10000
    }
    );
    res.json({message:counter});
}
//쿠키 삭제
const cookieDel = (req, res, next) => {
    res.clearCookie('counter');
    res.json({message:'del'});
}
export {
    sesstest, cookietest, cookieDel
}