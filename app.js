import express from 'express';

import sessionMiddleware from './config/session.js';

import authRoutes from './routes/authRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import publicRoutes from './routes/publicRoutes.js'
import userRoutes from './routes/userRoutes.js'
import protectRoutes from './routes/protectRoutes.js'

// ecom routes
import categoryRoute from './routes/ecom/categoryRoutes.js'
import productRoute from './routes/ecom/productRoutes.js'
import { apiLimiter } from './middlewares/rateLimiter.js';

const app = express();
app.use(express.json());
app.use(sessionMiddleware);

// Use routes
app.use("/api", apiLimiter)
app.use("/", publicRoutes);
app.use("/api/auth", authRoutes, protectRoutes);
app.use("/api/files", fileRoutes);
app.use("/users", userRoutes);

// ecom route
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

export default app;