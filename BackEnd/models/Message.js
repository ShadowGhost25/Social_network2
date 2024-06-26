import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
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
  },
  historyMessage: {
    type: [Object]
  },

})

export default mongoose.model('Messages', MessageSchema)