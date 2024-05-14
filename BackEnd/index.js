import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import http from "http";
// import { WebSocketServer } from "ws";
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
    if (file.mimetype.startsWith("audio")) {
      uploadPath = "musics";
    } else {
      uploadPath = "uploads";
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
const music = multer({ storage }); //multer({ storage }): Это создает экземпляр объекта multer, который настраивается с опциями.
app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST", "PATCH", "DELETE"] }));
app.use("/uploads", express.static("uploads")); //express.static("uploads"): Это middleware Express.js, который предоставляет статические файлы из указанной директории.
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
  // Чтение названия файла из папки music
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
app.get("/friends", userController.friends)
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});
// const CHAT_BOT = 'ChatBot';
// let chatRoom = '';
// let allUsers = [];
io.on('connection', (socket) => {
  // socket.on('join', ( data ) => {
  //   const { userName, roomId} = data
  //   socket.join(roomId);

  //   let __createdtime__ = Date.now(); // Current timestamp
  //   socket.to(roomId).emit('message', {
  //     message: userName,
  //     userName: CHAT_BOT,
  //   __createdtime__
  //   });
  //   socket.emit('receive_message', {
  //     username: CHAT_BOT,
  //     __createdtime__
  //   });
  //   chatRoom = room;
  //   allUsers.push({ id: socket.id, username, room });
  //   chatRoomUsers = allUsers.filter((user) => user.room === room);
  //   socket.to(room).emit('chatroom_users', chatRoomUsers);
  //   socket.emit('chatroom_users', chatRoomUsers);
  // });
  socket.on('connect', () => { })
  socket.on('join', ({ roomId, userName }) => {
    // Присоединяем пользователя к комнате
    socket.join(roomId);
    // const user = {roomId, userName};
    // socket.emit("message", user)
  });

  socket.on('sendMessage', (message) => {
    console.log(message)
    // Отправляем сообщение всем пользователям в комнате, кроме отправителя
    socket.to(message.roomId).emit('message', message);
  });
  // io.to
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.post('/roomId', messagecontroller.messages)

server.listen(3002, (err) => {
  if (err) {
    return console.log("=>", err);
  }
  console.log("Express Server Ok");
});


// const wss = new WebSocketServer({ port: 4000 });// Создание сервера WebSocket
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     const buffer = Buffer.from(message, 'base64').toString('ascii');
//     const isEvent = JSON.parse(buffer)
//     switch (isEvent.event) {
//       case 'message':
//         broadCastMessage(isEvent);
//         const userId = async (req, res) => {
//           await userModel.findById(isEvent.idUser);
//           await userModel.updateOne(
//             {
//               _id: isEvent.idUser
//             },
//             { $push: { historyMessage: isEvent } }
//           )
//         }
//         userId()
//         console.log('Получено сообщение:', isEvent.message);
//         break;
//       case 'connection':
//         console.log('Новое подключение WebSocket.');
//         broadCastMessage(isEvent);
//         break;
//       default:
//         console.log('Неизвестное событие:', isEvent.event);
//     }
//   });

//   ws.on('close', function close() {
//     console.log('Клиент WebSocket отключился');
//   });
// });

// function broadCastMessage(message) {
//   wss.clients.forEach(client => {
//     client.send(JSON.stringify(message));
//   });
// }