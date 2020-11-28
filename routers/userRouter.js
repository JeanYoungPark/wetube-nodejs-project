import express from 'express';
import {
  changePassword, editProfile, userDetail,
} from '../controller/usersController';
import routes from '../routes';
import { onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
