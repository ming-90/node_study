import express from 'express'
import {createUser,findUser,deleteUser,findoneUser,updateUser,loginUser} from '../../controller/UserControl'
import {signIn} from '../../controller/userSign/signInControl'
import {idCheck,idCreate} from '../../controller/userSign/signUpControl'

const router = express.Router();

router.post('/',createUser);
router.get('/all',findUser);
router.get('/one',findoneUser);
router.delete('/',deleteUser);
router.post('/update',updateUser);
router.get('/test',loginUser)

router.post('/signin',signIn)
router.get('/idcheck',idCheck)

export default router