import express from 'express';
import {
  changePassword, getEditProfile, userDetail,
} from '../controller/usersController';
import routes from '../routes';
import { onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
