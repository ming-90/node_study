import user from '../../Model/userInfomation'
import db from '../../DB/DB_connect'

//아이디 체크
const idCheck = (req, res, next) => {
    db.dbconnection();
    let id = req.body.userId

    user.findOne({userId:id}, function(err, findUser){
        if(err){
            res.json({error:'1', message:err})
            return
        }
        if(findUser !== null){
            res.json({error:'1', message:'존재하는 아이디 입니다'})
            return
        }
        res.json({error:'0', message:'사용 가능한 아이디 입니다'})
    })
}

export{
    idCheck
}