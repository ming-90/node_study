import express from 'express'
import {signIn} from '../../controller/userSign/signInControl'
import {idCheck,idCreate} from '../../controller/userSign/signUpControl'
import {findUser,findoneUser,updateUsertest,findoneProfile,findProfile} from '../../controller/UserControl'
import {updateInformation} from '../../controller/userSign/setProfileControl'
import {likeStatus} from '../../controller/mainPage/likeControl'

const router = express.Router()

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
router.get('/signin',signIn)
//id check
router.get('/signup',idCheck)
//id create
router.post('/signup',idCreate)
//profile update
router.put('/profile',updateInformation)
//like status
router.put('/like',likeStatus)


export default router