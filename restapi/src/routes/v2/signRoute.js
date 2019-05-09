import express from 'express'
import {signIn} from '../../controller/userSign/signInControl'
import {idCheck,idCreate} from '../../controller/userSign/signUpControl'

const router = express.Router()

router.post('/signin',signIn)
router.get('/signup',idCheck)
router.put('/signup',idCreate)

export default router