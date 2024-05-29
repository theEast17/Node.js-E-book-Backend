import express from "express";
import globalErrorHandler from "./middlewares/globalErrorhandlers";
import userRouter from "./user/userRouter";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "hello" });
});

app.use(express.json())    // in readme.md line No.- 216

app.use('/api/users',userRouter)   // in readme.md line No.- 179
app.use(globalErrorHandler)        // in readme.md line No.- 103
export default app;
