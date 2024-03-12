import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
  },
  surName:{
    type: String,
    require: true,
  },
  login:{
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
    unique: true
  },
  phone:{
    type:String,
    require: true
  },
  password: {
    type: String,
    required: true, //Это свойство обязательно при создание пользователя
  },
  avatarUrl: {
    type:String,
  },
}, {
  timestamps: true,
})

export default mongoose.model('User', UserSchema)