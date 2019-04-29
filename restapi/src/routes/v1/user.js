import express from 'express'
import {user_create,find_all,user_delete,user_find,user_update} from '../../controller/user_control'

const router = express.Router();

router.post('/',user_create);
router.get('/all',find_all);
router.get('/user',user_find);
router.delete('/',user_delete);
router.post('/update',user_update);


export default router