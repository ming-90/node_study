import express from 'express'
import {index} from '../../controller/IndexControl'

const router = express.Router();

/* GET home page */
router.get('/',index)

export default router
