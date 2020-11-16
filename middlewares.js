import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest:"videos/"});

//미들웨어를 사용해 전역변수 생성
export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id:1
    }
    next();
};

export const uploadVideo = multerVideo.single('videoFile');
