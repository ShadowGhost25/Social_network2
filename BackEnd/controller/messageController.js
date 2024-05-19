import messagesModel from "../models/Message.js";

export const room = async (req, res) => {
  try {
    const friendId = req.body.friendId;
    const meId = req.body.meId;
    const generateRoomId = () => {
      const length = 6;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };

    const rooms = await messagesModel.find();

    let roomFound = false;

    for (const room of rooms) {
      // Проверяем, содержит ли комната нужные айдишники
      if (room.firstUserId.includes(meId) && room.secondUserId.includes(friendId) || room.firstUserId.includes(friendId) && room.secondUserId.includes(meId)) {
        res.json(room);
        roomFound = true;
        break; // Прерываем цикл, так как комната найдена
      }
    }

    if (!roomFound) {
      const doc = new messagesModel({
        firstUserId: meId,
        secondUserId: friendId,
        roomId: generateRoomId(),
        statusRoom: true,
      });

      const messageRoom = await doc.save();

      // console.log(`Комната с айдишниками ${friendId} и ${meId} не найдена, поэтому создали новую комнату`);
      res.json(messageRoom);
    }
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Не удалось присоединиться к комнате",
    });
  }
};
export const messages = async (req, res) => {
  try {
    const roomId = req.body.roomId
    const params = req.body
    const rooms = await messagesModel.updateOne(
      {
        roomId: roomId
      },
      { $push: { historyMessage: req.body } }
    );
    res.json(params);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Не удалось добавить сообщение",
    });
  }
};
