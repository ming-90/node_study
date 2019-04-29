import user from '../Model/user';
import db from '../DB/DB_connect'
import { isBuffer } from 'util';
//아이디 생성
const user_create = (req, res, next) => {
    db.dbconnection();
    user.create({
        userId : req.body.userId,
        password: req.body.password,
        userName: req.body.userName
    },
    function(err,user){
        if(err) res.json({massage:'err'});
        res.json({massage:'creat'});
    })
}
//아이디 삭제
const user_delete = (req, res, next) => {
    db.dbconnection();
    user.remove({
        userId: req.body.userId
    },
    function(err,req){
        if(err) res.json({massage:'err'});
        res.json({massage:'delete'});
    })
}
//전체 찾기
const find_all = (req, res, next) => {
    db.dbconnection();
    user.find({}, function(err,users){
        if(err) res.json({massage:'err'});
        res.json({massage:users});
    })

}
//유저 찾기
const user_find = (req, res, next) => {
    console.log("es");
    db.dbconnection();
    user.findOne({
        userId: req.body.userId
    },
    function(err,user){
        if(err) res.json({massage:'err'});
        res.json({massage:user});
    });
}

export{
    user_create, find_all, user_delete, user_find
}