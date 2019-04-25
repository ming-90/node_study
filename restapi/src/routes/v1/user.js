import express from 'express'
import {user_create,user_find,test} from '../../controller/user_control'
//const user = require('../../DB/schema');

const router = express.Router();

router.post('/create',user_create);
router.get('/find',user_find)
router.post('/test',test)

export default router