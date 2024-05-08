import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";

import {
  loginValidator,
  registerValidator,
  postCreateValidator,
  userStatusValidatior,
  groupCreateValidator,
} from "./validations.js";

import {
  groupController,
  postController,
  userController,
} from "./controller/Controller.js";

import { handleValidationEror, cheakAuth } from "./utils/Utils.js";

mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@practic.gpq4sx8.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Db Ok");
  })
  .catch((err) => {
    console.log("Db err =>", err);
  });

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;
    // Проверяем тип файла
    if (file.mimetype.startsWith('audio')) {
      uploadPath = 'musics';
    } else {
      uploadPath = 'uploads';
    }
    // Проверяем, существует ли указанная папка
    if (!fs.existsSync(uploadPath)) {
      // Если папка не существует, создаем ее
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const music = multer({ storage });
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/music", express.static("musics"));

app.post("/login", loginValidator, handleValidationEror, userController.login);
app.post(
  "/register",
  registerValidator,
  handleValidationEror,
  userController.register
);
app.get("/me", cheakAuth, userController.getMe);

app.post("/upload", cheakAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post("/music", cheakAuth, handleValidationEror, music.single("musics"), (req, res) => {
  res.json({
    url: `/musics/${req.file.originalname}`,
  });
});
app.get("/music", (req, res) => {
  // Чтение названия файла из папки music
  fs.readdir("musics", (err, files) => {
    if (err || !files.length) {
      return res.status(500).send("Ошибка чтения папки с музыкой");
    }
    res.json(files);
  });
});

app.post("/add-music/:id", cheakAuth, handleValidationEror, userController.addMusic)
app.post(
  "/add-group",
  cheakAuth,
  groupCreateValidator,
  handleValidationEror,
  groupController.create
);
app.get("/group", groupController.getAll);
app.get("/group/:id", groupController.getOne);
app.patch(
  "/group/:id",
  cheakAuth,
  groupCreateValidator,
  handleValidationEror,
  groupController.update
);

app.post(
  "/add-posts",
  cheakAuth,
  postCreateValidator,
  handleValidationEror,
  postController.create
);
app.get("/profile", cheakAuth, handleValidationEror, postController.getAllProfile);
app.get("/posts", postController.getAll);
app.get("/posts/:id", postController.getOne);

app.delete("/posts/:id", cheakAuth, postController.remove);
app.patch(
  "/posts/:id",
  cheakAuth,
  postCreateValidator,
  handleValidationEror,
  postController.update
);
app.patch(
  "/settings/:id",
  cheakAuth,
  userStatusValidatior,
  handleValidationEror,
  userController.updateUser
);

app.listen(3002, (err) => {
  if (err) {
    return console.log("=>", err);
  }
  console.log("Server Ok");
});
