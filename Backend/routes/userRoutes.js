import express from 'express'
import { registerUser,loginUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/register',registerUser);
router.post('/token',loginUser)

export default router;