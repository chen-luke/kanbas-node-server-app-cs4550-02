import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from "express-session";
import "dotenv/config";
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js'
import UserRoutes from './Kanbas/Users/routes.js';





const app = express();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING);
app.use(cors({
    credentials: true,                          // support cookies
    origin: process.env.FRONTEND_URL,           // restrict cross origin resource sharing to the react application
}));
const sessionOptions = {                        // configure server session after cors
    secret: process.env.SESSION_SECRET,         // this is a default session configuration that works fine     
    resave: false,                              // locally, but needs to be tweaked further to work in a
    saveUninitialized: false,                  // remote server such as AWS, Render, or Heroku. See later
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
}  
app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);




app.listen(process.env.PORT || 4000);

