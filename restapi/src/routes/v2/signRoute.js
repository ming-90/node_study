import express from 'express'
import {signIn} from '../../controller/userSign/signInControl'
import {idCheck,idCreate} from '../../controller/userSign/signUpControl'
import {findUser} from '../../controller/UserControl'
import {updateInformation} from '../../controller/userSign/setProfileControl'

const router = express.Router()

//find all
router.get('/finduser',findUser)

//login
router.get('/signin',signIn)
//id check
router.get('/signup',idCheck)
//id create
router.post('/signup',idCreate)
//profile update
router.put('/profile',updateInformation)

export default router