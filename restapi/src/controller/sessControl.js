//세션 테스트
const sesstest = (req, res, next) => {
    let sess;
    sess = req.session;
    sess.userId = "minki"
    sess.pass = "123qwe";
    res.json({id:sess.userId, pass: sess.pass})
}

export {
    sesstest
}