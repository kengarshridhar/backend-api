import express from 'express';
import { loginWithUsername } from '../controllers/authController.js';
import { registerUser, loginUser } from '../controllers/loginController.js';

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;