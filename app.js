import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(helmet());

const handleHome = (req,res) => res.send(`Hello World`);

app.get('/',handleHome);
app.get('/profile',handleHome);

export default app;
