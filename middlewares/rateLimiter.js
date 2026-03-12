import rateLimit from "express-rate-limit";

/* Global API limiter */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: {
    message: "Too many requests, please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false
});

/* Login protection limiter */
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts
  message: {
    message: "Too many login attempts. Try again after 15 minutes."
  }
});