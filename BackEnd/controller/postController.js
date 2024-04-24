import PostModel from "../models/Post.js";

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate({ path: "user", select: ["fullName", "avatarUrl"] })
      .exec();
    res.json(posts);
  } catch (error) {
    console.log("err => ", error);
    res.status(404).json({
      message: "Не удалось получить пост",
    });
  }
};
export const getAllProfile = async (req, res) => {
  try {
    const userIdMe = req.userId;
    const posts = await PostModel.find().exec();
    const filteredPosts = posts.filter(
      (post) => post.user.toString() === userIdMe
    );

    res.json(filteredPosts);
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findByIdAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    ).populate("user");
    if (!post) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }
    res.json(post);
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};

export const remove = async (req, res) => {
  debugger;
  try {
    const postId = req.params.id;
    const post = await PostModel.findByIdAndDelete({
      _id: postId,
    });
    if (!post) {
      return res.status(404).json({
        message: "Не удалось удалить пост",
      });
    }
    res.json({
      success: true,
    });
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags.split(","),
      user: req.userId, // Получает id c chechAuth
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось создать пост",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId, // Получает id c chechAuth
      }
    );
    res.json({
      success: true,
    });
  } catch (error) {
    console.log("err => ", error);
    res.status(500).json({
      message: "Не удалось обновить пост",
    });
  }
};
