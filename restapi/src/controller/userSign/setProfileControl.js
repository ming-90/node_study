import match from '../../Model/matchInfomation'

//프로필 업데이트
const updateInformation = (req, res, next) => {
    try{
        match.updateOne({userId:req.body.userId},
            {$set:{
                userProfile:{
                    userNickname: req.body.userProfile.userNickname,
                    userAge: req.body.userProfile.userAge,
                    userGender: req.body.userProfile.userGender,
                    userIntroduction: req.body.userProfile.userIntroduction
                }
            }},
            function (err,user) {
                if(err){
                    res.json({error:'1', message:err})
                    return;
                }
                res.json({error:'0', message:'프로필 업데이트'})
                
            })
    } catch(e){
        res.json({error:e})
    }
}

export {
    updateInformation
}