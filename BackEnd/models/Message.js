import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  message: {
    type: String
  },
  firstUserId: {
    type: String
  },
  secondUserId: {
    type: String
  },
  roomId: {
    type: String
  },
  statusRoom: {
    type: Boolean
  }
})

export default mongoose.model('Messages', MessageSchema)