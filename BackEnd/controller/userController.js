import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const doc = new userModel({
      fullName: req.body.fullName,
      email: req.body.email,
      surName: req.body.surName,
      login: req.body.login,
      email: req.body.email,
      phone: req.body.phone,
      avatarUrl: req.body.avatarUrl,
      password,
    });
    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "не удалось зарегистрироваться",
    });
    return;
  }
};
export const updateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    await userModel.updateOne(
      {
        _id: userId,
      },
      {
        fullName: req.body.fullName,
        email: req.body.email,
        surName: req.body.surName,
        login: req.body.login,
        email: req.body.email,
        phone: req.body.phone,
        status: req.body.status,
      }
    );
    res.json("Данные профиля обновленны");
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось написать статус",
    });
  }
};
export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        message: "Неверные логин или пароль",
      });
    }

    const isValidationPass = await bcrypt.compare(
      req.body.password,
      user._doc.password
    );

    if (!isValidationPass) {
      return res.status(400).json({
        message: "Неверные логин или пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось авторизироваться",
    });
  }
};
export const getMe = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }
    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нет доступа",
    });
    return;
  }
};
export const addMusic = async (req, res) => {
  try {
    const userId = req.body.id;
    const user = await userModel.findById(userId);
    if (user.music.includes(req.body.music)) {
      return res.status(400).json({ error: "Эта музыка уже добавлена" });
    }
    await userModel.updateOne(
      {
        _id: userId,
      },
      { $push: { music: req.body.music } }
    );
    console.log(userId);
    res.json("Музыка успешно добавлена");
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нет доступа",
    });
  }
};
export const removeMusic = async (req, res) => {
  try {
    const userId = req.body.id;
    const user = await userModel.findById(userId);
    if (!user.music.includes(req.body.music)) {
      return res.status(400).json({ error: "Эта музыка уже удалена" });
    }
    await userModel.updateOne(
      {
        _id: userId,
      },
      { $pull: { music: req.body.music } }
    );
    res.json("Музыка успешно Удалена");
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нет доступа",
    });
  }
};
export const friends = async (req, res) => {
  try {
    const userFriends = await userModel.find().exec();
    const { id } = req.body;
    const filterUser = userFriends.filter((user) => user._id.toString() !== id);
    res.json(filterUser);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нет допуста к пользователям",
    });
  }
};
export const addFriends = async (req, res) => {
  try {
    const { userFriendId, userMeId } = req.body;
    const userFriends = await userModel.find().exec();
    const filterUserMe = userFriends.filter(
      (user) => user._id.toString() === userMeId
    );
    const filterUserFriend = userFriends.filter(
      (user) => user._id.toString() === userFriendId
    );
    const user = {
      filterUserMe,
      filterUserFriend,
    };
    const isInFriends = filterUserMe[0].friend.includes(userFriendId);
    const isInSubscribers = filterUserMe[0].subscriber.includes(userFriendId);
    const isInSubscription = filterUserMe[0].subscription.includes(userFriendId);
    const isInFriendsUser = filterUserFriend[0].friend.includes(userMeId);
    const isInSubscribersUser = filterUserFriend[0].subscriber.includes(userMeId);
    const isInSubscriptionUser = filterUserFriend[0].subscription.includes(userMeId);
    if (!(isInFriends || isInSubscribers || isInSubscription)) {
      await userModel.updateOne(
        {
          _id: userMeId,
        },
        { $push: { subscription: userFriendId } }
      );
      await userModel.updateOne(
        {
          _id: userFriendId,
        },
        { $push: { subscriber: userMeId } }
      );
    }
    if (isInSubscriptionUser && isInSubscribers) {
      await userModel.updateOne(
        {
          _id: userMeId,
        },
        { $pull: { subscriber: userFriendId } }
      );
      await userModel.updateOne(
        {
          _id: userFriendId,
        },
        { $pull: { subscription: userMeId } }
      );
      await userModel.updateOne(
        {
          _id: userMeId,
        },
        { $push: { friend: userFriendId } }
      );
      await userModel.updateOne(
        {
          _id: userFriendId,
        },
        { $push: { friend: userMeId } }
      );
    }

    res.json(user);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нельзя добавить в друзья",
    });
  }
};
export const deleteFriends = async (req, res) => {
  try {
    const { userFriendId, userMeId } = req.body;
    await userModel.updateOne(
      {
        _id: userMeId,
      },
      { $pull: { friend: userFriendId } }
    );
    await userModel.updateOne(
      {
        _id: userFriendId,
      },
      { $pull: { friend: userMeId } }
    );
    console.log(userFriendId, userMeId)
    res.json(userFriendId);
  } catch (error) {
    console.log("err => ", error);
    res.status(400).json({
      message: "Нельзя добавить в друзья",
    });
  }
};
export const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findByIdAndUpdate(
      {
        _id: userId,
      }
    )
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }
    console.log(userId)
    res.json(user);
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось получить пользователя",
    });
  }
}