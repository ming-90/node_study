import user from '../Model/user';
import db from '../DB/DB_connect'
//아이디 생성
const user_create = (req, res, next) => {
    db.dbconnection();
    user.create({
        userId : req.body.userId,
        password: req.body.password,
        userName: req.body.userName
    },
    function(err,user){
        if(err) res.json({message:'create err'});
        res.json({message:'creat'});
    })
}
//아이디 삭제
const user_delete = (req, res, next) => {
    db.dbconnection();
    user.remove({
        userId: req.body.userId
    },
    function(err,req){
        if(err) res.json({message:'delete err'});
        res.json({message:'delete'});
    })
}
//전체 찾기
const find_all = (req, res, next) => {
    db.dbconnection();
    user.find({}, function(err,users){
        if(err) res.json({message:'find all err'});
        res.json({message:users});
    })

}
//유저 찾기
const user_find = (req, res, next) => {
    db.dbconnection();
    user.findOne({
        userId: req.body.userId
    },
    function(err,user){
        if(err) res.json({message:'user find err'});
        res.json({message:user});
    });
}
//유저 업데이트
const user_update = (req, res, next) => {
    db.dbconnection();
    user.updateOne({userId:req.body.userId}, {$set:{userName:req.body.userName}}, function(err,update){
        if(err){
            res.json({message:'update err', err});
            return;
        } 
        res.json({message:'update', update});
    })
}

export{
    user_create, find_all, user_delete, user_find, user_update
}