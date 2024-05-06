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

const storageImages = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageMusic = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "musics");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storageImages });
const music = multer({ storageMusic });
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/musics", express.static("musics"));

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

app.post("/music", cheakAuth, music.single("mp3"), (req, res) => {
  // console.log(req.file.originalname)
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

// Обработчик для GET запроса на /music
// app.get('/music/:filename', (req, res) => {
//   const filePath = path.join(__dirname, 'music');

//   // Проверяем существует ли файл
//   //fs модуль node.js для работы с файлами
//   if (fs.existsSync(filePath)) {
//     // Если файл существует, отправляем его как ответ
//     res.sendFile(filePath);
//   } else {
//     // Если файл не существует, отправляем ответ с сообщением об ошибке
//     res.status(404).json( 'Файла не существует');
//   }
// });

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
app.get("/profile", cheakAuth, postController.getAllProfile);
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
