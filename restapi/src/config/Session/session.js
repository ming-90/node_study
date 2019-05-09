const sessionConnection = (req) => {
    let sess;
    sess = req.session;
    sess.userId = req.body.userId;
    console.log(sess.userId);
    console.log(req.body.userId);
}

const sessionDelete = (req) => {
    let sess;
    sess = req.session;
    sess.userId = "";
}

export{
    sessionConnection, sessionDelete
}