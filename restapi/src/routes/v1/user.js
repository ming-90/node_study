import express from 'express'
import {user} from '../../controller/user_control'

const router = express.Router();

router.get('/',user)

export default router