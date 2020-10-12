//user로 들어오는 주소의 라우터들
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req,res) => res.send(`user index`)); //  /user
userRouter.get("/edit", (req,res) => res.send(`user edit`)); //  /user/edit
userRouter.get("/password", (req,res) => res.send(`user password`)); //  /user/password

