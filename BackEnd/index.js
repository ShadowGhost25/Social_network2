import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors'

import { loginValidator, registerValidator, postCreateValidator } from './validations.js'

import { postController, userController } from './controller/Controller.js'

import { handleValidationEror, cheakAuth } from './utils/Utils.js';

mongoose
  .connect('mongodb+srv://admin:wwwwww@practic.gpq4sx8.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => { console.log('Db Ok') })
  .catch((err) => { console.log("Db err =>", err) })

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads')
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

app.use(express.json());
app.use(cors())
app.use('/uploads', express.static('uploads'))


app.post('/login', loginValidator, handleValidationEror, userController.login)
app.post('/register', registerValidator, handleValidationEror, userController.register)
app.get('/me', cheakAuth, userController.getMe)


app.post('/upload', cheakAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`
  })
})

app.post('/add-posts', cheakAuth, postCreateValidator, handleValidationEror, postController.create)
app.get('/posts', postController.getAll)
app.get('/posts/:id', postController.getOne)
app.delete('/posts/:id', cheakAuth, postController.remove)
app.patch('/posts/:id', cheakAuth, postCreateValidator, handleValidationEror, postController.update)

app.listen(3002, (err) => {
  if (err) {
    return console.log('=>',err)
  }
  console.log('Server Ok')
})