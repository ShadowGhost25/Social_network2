import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //Это свойство обязательно при создание поста
    unique: true,
},
  text: {
    type: String,
    required: true, //Это свойство обязательно при создание поста
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //Ссылается на модель user
    required: true, //Это свойство обязательно при создание поста
  },
  imageUrl: String,
}, {
  timestamps: true,
})

export default mongoose.model('Group', groupSchema)