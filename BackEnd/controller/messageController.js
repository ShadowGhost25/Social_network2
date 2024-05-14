import messagesModel from "../models/Message.js"

export const messages = async (req, res) => {
  try {
    const generateRoomId = () => {
      const length = 6;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    const roomId = generateRoomId();
    const doc = new messagesModel(
      {
        firstUserId: req.body.id,
        secondUserId: 2,
        roomId: roomId,
        statusRoom: true,
      }
    )
    const messageRoom = await doc.save()
    res.send(messageRoom);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Не удалось добавить сообщение",
    });
  }
}