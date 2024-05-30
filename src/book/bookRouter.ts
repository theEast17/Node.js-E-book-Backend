import express from "express";
import createBook from "../controllers/createBook";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 1e7 }, // 30mb
});

bookRouter.post(
  "/create",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
