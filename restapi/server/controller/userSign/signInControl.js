import user from '../../Model/userInfomation'

//sign in
const signIn = (req, res, next) => {
    try{
        res.set({
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,POST,PUT'
        })
        let id = req.body.userId
        let pwd = req.body.userPwd
        user.findOne({userId:id}, function(err, findUser){
            if(err){
                res.json({error:'2', message:err})
                return
            }
            //아이디로 검색이 안될때
            if(findUser === null){
                res.json({errCode:'1', errMessage:'사용자가 존재하지 않습니다'})
                return
            }
            //비밀번호가 틀렸을때
            if(id === findUser.userId && pwd !== findUser.userPwd){
                res.json({errCode:'1', errMessage:'비밀번호가 일치하지 않습니다'}) 
                return
            }
            user.updateOne({userId:req.body.userId}, 
            {$set:{upDate:Date.now}}, 
            function(err,callback){
                if(err){
                    res.json({error:'2', message:err})
                    return
                }
            })
            res.json({errCode:'0', errMessage:findUser.userName+'님 환영합니다'})
        })
    } catch(e){
        res.json({errCode:'1', errMessage:e})
    }
}

export {
    signIn
}