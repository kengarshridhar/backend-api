import express from 'express';
import { loginWithUsername } from '../controllers/authController.js';
import { registerUser } from '../controllers/loginController.js';

const router = express.Router();

router.post("/login", loginWithUsername);
router.post("/register", registerUser);

export default router;