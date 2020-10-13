import routes from "./routes";

//미들웨어를 사용해 전역변수 생성
export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
}