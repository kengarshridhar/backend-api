import express from 'express';
import { loginWithUsername } from '../controllers/authController.js';

const router = express.Router();

router.post("/login", loginWithUsername);

export default router;