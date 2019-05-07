import express from 'express'
import {sesstest} from '../../controller/sessControl'

const router = express.Router();

router.get('/',sesstest);

export default router