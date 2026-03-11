# Backend API 
Create Backend for E-commerce, Blog, HRM, CRM, LMS.

## Routes

### Public Route

```
GET /users
GET /user/:username
POST /user/ 
PATCH /user/:username
DELETE /user/:username
```

### Auth Route
```
POST /api/auth/login [username & Password]
```
### Product Routes

```
GET /product
GET /product/:id
POST /product/add 
PATCH /product/:id
DELETE /product/:id
```
### Category Routes

```
GET /category
GET /category/:id
POST /category/add 
PATCH /category/:id
DELETE /category/:id
```
### Protected Route
```
comming soon
```
Backend Tree
```
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
│   ├── loginController.js
│   └── fileController.js
│
├── middlewares/
│   ├── auth/
│   │   ├── jwtMiddleware.js
│   │   ├── sessionMiddleware.js
│   │   ├── rolePermission.js
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
│   │   ├── Category.js
│   │   ├── Product.js
│   │   └── Session.js
│   ├── postgres/
│   │   ├── LoginData.js
│   │   └── AuditLog.js
│
├── routes/
│   ├── ecom/
│   │   ├── categoryRoutes.js
│   │   └── productRoutes.js
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── publicRoutes.js
│   ├── protectRoutes.js
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
```