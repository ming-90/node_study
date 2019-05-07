import express from 'express'
import {sesstest, cookietest, cookieDel} from '../../controller/sessControl'

const router = express.Router();

router.get('/',sesstest);
router.get('/cookie',cookietest)
router.get('/cookiedel',cookieDel)

export default router