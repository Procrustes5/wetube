import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import passport from "passport";
import {
  getJoin,
  getLogin,
  getMe,
  logout,
  postJoin,
  postLogin,
  githubLogin,
  postGithubLogin,
  naverLogin,
  postNaverLogin,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.naver, naverLogin);

globalRouter.get(
  routes.naverCallback,
  passport.authenticate("naver", { failureRedirect: "/login" }),
  postNaverLogin
);

export default globalRouter;