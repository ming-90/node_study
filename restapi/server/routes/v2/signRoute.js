import express from 'express'
import {signIn} from '../../controller/userSign/signInControl'
import {idCheck,idCreate} from '../../controller/userSign/signUpControl'
import {findUser,findoneUser,updateUsertest,findoneProfile,findProfile} from '../../controller/UserControl'

//cors 옵션주기
//const app = express()
//if(cfg.web.cors) app.use(require('cors')());

const router = express.Router()

try{
    
    //find all
    router.get('/finduser',findUser)
    //find one
    router.get('/findOneuser',findoneUser)
    //find all profile
    router.get('/findprofile',findProfile)
    //find one profile
    router.get('/findoneprofile',findoneProfile)
    //update test
    router.get('/updatetest',updateUsertest)

    //login
    router.put('/signin', signIn)
    router.get('/signin',(req,res) => {
        res.header('Access-Control-Allow-Origin', 'http://192.168.1.101');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send();
    })
    //id check
    router.get('/signup',idCheck)
    //id create
    router.post('/signup',idCreate)

}catch(e){
    console.log("signRoute Err")
}

export default router