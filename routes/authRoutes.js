import express from 'express';
import { loginWithUsername } from '../controllers/authController.js';
import { registerUser, loginUser, logoutUser, loginCheck } from '../controllers/loginController.js';
import { loginLimiter } from '../middlewares/rateLimiter.js';


const router = express.Router();

router.post( "/register", loginLimiter, registerUser );
router.post( "/login",loginLimiter, loginUser );
router.get( "/check", loginLimiter, loginCheck );
router.post( "/logout", loginLimiter, logoutUser );

export default router;