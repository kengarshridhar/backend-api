import session from 'express-session';
import MongoStore from 'connect-mongo';

import dotenv from 'dotenv';
dotenv.config({ quiet: true});


const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  })
});

export default sessionMiddleware;
