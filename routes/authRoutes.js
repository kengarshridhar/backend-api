import express from 'express';
import { loginWithUsername } from '../controllers/authController.js';
import { registerUser, loginUser, logoutUser, loginCheck } from '../controllers/loginController.js';

const router = express.Router();

router.post( "/register", registerUser );
router.post( "/login", loginUser );
router.get( "/check", loginCheck );
router.post( "/logout", logoutUser );

export default router;