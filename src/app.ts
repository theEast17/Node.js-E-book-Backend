import express from "express";
import globalErrorHandler from "./middlewares/globalErrorhandlers";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import  cors from "cors";
import { config } from "./config/config";

const app = express();

app.use(cors({
  origin:config.frontendDomain,
}))

app.get("/", (req, res, next) => {
  res.json({ message: "hello" });
});

app.use(express.json())    // in readme.md line No.- 216

app.use('/api/users',userRouter)   // in readme.md line No.- 179
app.use('/api/books',bookRouter)
app.use(globalErrorHandler)        // in readme.md line No.- 103
export default app;
