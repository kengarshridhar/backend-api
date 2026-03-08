import express from 'express';

import sessionMiddleware from './config/session.js';
import authRoutes from './routes/authRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import publicRoutes from './routes/publicRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json());
app.use(sessionMiddleware);

// Use routes
app.use("/", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/users", userRoutes);

export default app;