import express from "express";
import createBook from "../controllers/createBook";
import multer from "multer";
import path from "node:path";
import authenticate from "../middlewares/authenticate";
import updateBook from "../controllers/updateBook";
import getBooks from "../controllers/getBooks";

const bookRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 1e7 }, // 10mb
});

bookRouter.post(
  "/create",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

bookRouter.put(
  "/update/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  updateBook
);

bookRouter.get(
  "/",
  getBooks
);

export default bookRouter;
