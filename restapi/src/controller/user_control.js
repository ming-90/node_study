const app = express();
const user_create = (req, res, next) => {
    const db_test = require('../DB/schema');
    db_test.create({
        userId : req.bady.name,
        password: req.bady.pass,
        userNmae: req.body.email
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
    const db_test = require('../DB/schema');
    db_test.find({}, function(err,users){
        if(err) res.json({massage:'err'});
        res.json({massage:users});
    })

}

export{
    user_create, user_find, test
}