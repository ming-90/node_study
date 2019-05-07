import express from 'express'
import {createUser,findUser,deleteUser,findoneUser,updateUser,loginUser} from '../../controller/UserControl'

const router = express.Router();

router.post('/',createUser);
router.get('/all',findUser);
router.get('/one',findoneUser);
router.delete('/',deleteUser);
router.post('/update',updateUser);
router.get('/test',loginUser)

export default router