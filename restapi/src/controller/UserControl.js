import user from '../Model/userInfomation';
import db from '../config/DB/DB_connect'
//아이디 생성
const createUser = (req, res, next) => {
    db.dbconnection();
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
    db.dbconnection();
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
    db.dbconnection();
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
    db.dbconnection();
    user.findOne({
        userId: req.body.userId
    },
    function(err,user){
        if(err) {
            res.json({message:'user find err'});
            return;
        }
        res.json({message:user});
    });
}
//유저 업데이트
const updateUser = (req, res, next) => {
    db.dbconnection();
    user.updateOne({userId:req.body.userId}, {$set:{userName:req.body.userName}}, function(err,update){
        if(err){
            res.json({message:'update err', err});
            return;
        } 
        res.json({message:'update', update});
    })
}
//로그인
const loginUser = (req, res, next) => {
    let sess = req.session;
    res.json({id:sess.userId, pass: sess.pass})
}
export{
    createUser, findUser, deleteUser, findoneUser,updateUser,loginUser 
}