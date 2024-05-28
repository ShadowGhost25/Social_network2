import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import http from "http";
import { Server } from 'socket.io';

import {
  loginValidator,
  registerValidator,
  postCreateValidator,
  userStatusValidatior,
  groupCreateValidator,
} from "./validations.js";

import {
  groupController,
  messagecontroller,
  postController,
  userController,
} from "./controller/Controller.js";

import { handleValidationEror, cheakAuth } from "./utils/Utils.js";
import userModel from "./models/User.js";

const app = express();

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;
    if (file.mimetype.startsWith("audio")) {
      uploadPath = "musics";
    } else {
      uploadPath = "uploads";
    }
    if (!fs.existsSync(uploadPath)) {
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
app.use(cors({ origin: "*", methods: ["GET", "POST", "PATCH", "DELETE"] }));
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
app.get("/admin", cheakAuth, userController.allUsers);
app.delete("/delete/:id", cheakAuth, userController.deleteUser);
app.post("/upload", cheakAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post(
  "/music",
  cheakAuth,
  handleValidationEror,
  music.single("musics"),
  (req, res) => {
    res.json({
      url: `/musics/${req.file.originalname}`,
    });
  }
);
app.get("/music", (req, res) => {
  fs.readdir("musics", (err, files) => {
    if (err || !files.length) {
      return res.status(500).send("Ошибка чтения папки с музыкой");
    }
    res.json(files);
  });
});

app.post(
  "/add-music/:id",
  cheakAuth,
  handleValidationEror,
  userController.addMusic
);
app.post("/delete-music/:id", cheakAuth, userController.removeMusic);
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
app.get(
  "/profile",
  cheakAuth,
  handleValidationEror,
  postController.getAllProfile
);
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
app.post("/friends", userController.friends);
app.post("/add-friends", userController.addFriends);
app.post("/delete-friends", userController.deleteFriends);
app.get("/profile/:id", userController.getOneUser);
app.post("/roomId", messagecontroller.room);
app.post("/add-message", messagecontroller.messages);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
  pingInterval: 25000,
  pingTimeout: 60000,
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on('join', ({ roomId, userName }) => {
    socket.join(roomId);
    console.log(`${userName} joined room: ${roomId}`);
  });
  socket.on('message', (message) => {
    console.log(message);
    io.to(message.roomId).emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3002, (err) => {
  if (err) {
    return console.log("=>", err);
  }
  console.log("Express Server Ok");
});