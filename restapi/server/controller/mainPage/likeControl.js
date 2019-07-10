import match from '../../Model/matchInfomation'

//좋아요,싫어요 수 업데이트
const likeStatus = (req, res, next) => {
    let status = ""
    try{
        if(req.body.likeStatus == true){
            //좋아요 이벤트
            match.findOne({
                userId:req.body.userId
            }, function(err,user){
                //사용자 정보에 내가 좋아요 누른 유저 아이디 추가
                if(user.userId){
                    user.proposeTo.likeUser.push(req.body.proposedId)
                    user.save(function(err){
                        if(err) res.json({error:'1', message:err})
                    }) 
                }
            })
            match.findOne({
                userId:req.body.proposedId
            }, function(err,user){
                if(user.userId){
                    user.proposeFrom.likeUser.push(req.body.userId)
                    if(user.proposeFrom.likeCounter == null) user.proposeFrom.likeCounter = 1
                    else user.proposeFrom.likeCounter += 1

                    user.save(function(err){
                        if(err) res.json({error:'1', message:err})
                    })
                }
            })
            status = "좋아요"

        }else{
            //싫어요 이벤트

        }
    } catch(e){

    }
}


export{
    likeStatus
}