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
        if(err) res.json({massage:'err'});
        res.json({massage:'creat'});
    })
}
const test = (req, res, next) => {
    console.log(req.body);
}

const user_find = (req, res, next) => {
    db.dbconnection();
    user.find({}, function(err,users){
        if(err) res.json({massage:'err'});
        res.json({massage:users});
    })

}

export{
    user_create, user_find, test
}