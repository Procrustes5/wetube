import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
import User from "./models/User";
import routes from "./routes";
import {
  githubLoginCallback,
  naverLoginCallback,
} from "./controllers/userController";

dotenv.config();
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://studiosundial.com${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NV_ID,
      clientSecret: process.env.NV_SECRET,
      callbackURL: `http://studiosundial.com${routes.naverCallback}`,
    },
    naverLoginCallback
  )
);

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
