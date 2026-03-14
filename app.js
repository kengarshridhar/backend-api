import express from 'express';
import helmet from "helmet";
import corsMiddleware from './config/cors.js'

import sessionMiddleware from './config/session.js';
import { apiLimiter } from './middlewares/rateLimiter.js';
import { requestLogger } from './middlewares/auth/requestLogger.js';

import authRoutes from './routes/authRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import publicRoutes from './routes/publicRoutes.js'
import userRoutes from './routes/userRoutes.js'
import protectRoutes from './routes/protectRoutes.js'

// ecom routes
import categoryRoute from './routes/ecom/categoryRoutes.js'
import productRoute from './routes/ecom/productRoutes.js'
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(sessionMiddleware);
app.use(helmet());
app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

// Use routes
app.use("/api", apiLimiter)
app.use("/", publicRoutes);
app.use("/api/auth", authRoutes, protectRoutes);
app.use("/api/files", fileRoutes);
app.use("/users", userRoutes);

// ecom route
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.use(errorHandler);

export default app;