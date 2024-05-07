import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
  },
  surName: {
    type: String,
    require: true, //Это свойство обязательно при создание пользователя
  },
  login: {
    type: String,
    require: true, //Это свойство обязательно при создание пользователя
  },
  email: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
    unique: true
  },
  phone: {
    type: String,
    require: true //Это свойство обязательно при создание пользователя
  },
  password: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
  },
  avatarUrl: {
    type: String,
  },
  status: {
    type: String,
  },
  music: {
    type: [String]
  }
}, {
  timestamps: true,
})

export default mongoose.model('User', UserSchema)