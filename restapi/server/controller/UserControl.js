import user from '../Model/userInfomation';
//아이디 생성
const createUser = (req, res, next) => {
    user.create({
        userId : req.body.userId,
        password: req.body.password,
        userName: req.body.userName,
        userEmail: req.body.userEmail
    },
    function(err,user){
        if(err) {
            res.json({message:'create err'});
            return;
        }
        res.json({message:'creat'});
    })
}
//아이디 삭제
const deleteUser = (req, res, next) => {
    user.remove({
        userId: req.body.userId
    },
    function(err,req){
        if(err) {
            res.json({message:'delete err'});
            return;
        }
        res.json({message:'delete'});
    })
}
//전체 찾기
const findUser = (req, res, next) => {
    user.find({}, function(err,users){
        if(err) {
            res.json({message:'find all err'});
            return;
        }
        res.json({message:users});
    })

}
//유저 찾기
const findoneUser = (req, res, next) => {
    user.findOne({
        userId: req.body.userId
    },
    function(err,user){
        if(err) {
            res.json({message:'user find err'});
            return;
        }
        res.json({message:user.userId});
    });
}
//유저 업데이트
const updateUser = (req, res, next) => {
    user.updateOne({userId:req.body.userId}, 
        {$set:{userName:req.body.userName}}, 
        function(err,update){
        if(err){
            res.json({message:'update err', err});
            return;
        } 
        res.json({message:'update', update});
    })
}
//유저 업데이트 테스트
const updateUsertest = (req, res, next) => {

    user.findOne({userId:req.body.userId}, 
    function(err,User){
        User.userId = "1234"
        User.save(function(err,user){
            res.json({m:user})
        })
        res.json({a:User.userId})
    })
}
//유저 프로필 검색
const findoneProfile = (req, res, next) => {
    match.findOne({userId:req.body.userId}, 
    function(err,User){
        if(err) res.json({a:err})
        res.json(User)
    })
}
//유저 전체 프로필 검색
const findProfile = (req, res, next) => {
    match.find({}, 
    function(err,User){
        if(err) res.json({a:err})
        res.json(User)
    })
}
//로그인
const loginUser = (req, res, next) => {
    let sess = req.session;
    res.json({id:sess.userId, pass: sess.pass})
}
export{
    createUser, findUser, deleteUser, findoneUser,updateUser,loginUser,updateUsertest,
    findoneProfile, findProfile 
}