import user from '../../Model/userInfomation'
import db from '../../config/DB/DB_connect'
import {sessionConnection, sessionDelete} from '../../config/Session/session'

//sign in
const signIn = (req, res, next) => {
    db.dbconnection();
    let id = req.body.userId
    let pwd = req.body.Password
    user.findOne({userId:id}, function(err, findUser){
        if(err){
            res.json({error:'1', message:err})
            return
        }
        //아이디로 검색이 안될때
        if(findUser === null){
            res.json({error:'1', message:'사용자가 존재하지 않습니다'})
            return
        }
        //비밀번호가 틀렸을때
        if(id === findUser.userId && pwd !== findUser.password){
            res.json({error:'1', message:'비밀번호가 일치하지 않습니다'})
            return
        }
        sessionConnection(req);
        res.json({error:'0', message:findUser.userName+'님 환영합니다'})
    })
}

export {
    signIn
}