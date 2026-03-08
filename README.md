Backend Tree

backend/
├── config/
│   ├── db/
│   │   ├── mongo.js
│   │   ├── postgres.js
│   ├── jwt.js
│   ├── session.js
│   └── oauth.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── fileController.js
│
├── middlewares/
│   ├── auth/
│   │   ├── jwtMiddleware.js
│   │   ├── sessionMiddleware.js
│   │   └── oauthMiddleware.js
│   ├── validators/
│   │   ├── loginValidator.js
│   │   └── fileValidator.js
│   ├── rateLimiter.js
│   └── errorHandler.js
│
├── models/
│   ├── mongo/
│   │   ├── User.js
│   │   └── Session.js
│   ├── postgres/
│   │   ├── LoginData.js
│   │   └── AuditLog.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── fileRoutes.js
│
├── services/
│   ├── authService.js
│   ├── fileService.js
│   └── userService.js
│
├── utils/
│   ├── mimeTypes.js
│   ├── logger.js
│   └── helper.js
│
├── uploads/                ← Local storage for images and files
│   └── images/
│   └── videos/
│   └── documents/
│
├── app.js                  ← Express setup
├── server.js               ← Cluster & performance setup (10k req/sec)
├── .env
├── package.json
└── README.md
