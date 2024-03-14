import groupModel from '../models/Group.js'
export const create = async (req,res) => {
    try {
        const doc = new groupModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            user: req.userId
        })
        const group = await doc.save()

        res.json(group)
    } catch (error) {
        console.log("err => ", error);
        res.status(500).json({
          message: "Не удалось создать группу",
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const group = await groupModel.find()
        .populate({path: 'user', select: ['fullName', 'avatarUrl']})
        .exec()
        res.json(group)
    } catch (error) {
        console.log("err => ", error);
        res.status(500).json({
          message: "Не удалось получить группу",
        });
    }
}

export const update = async(req, res) =>{
    try{
        const groupId = req.params.id;

        await groupModel.updateOne(
            {
                _id:groupId,
            },
            {
                title: req.body.title,
                text:req.body.text,
                imageUrl: req.body.imageUrl,
                user: req.userId,
            }
        )
        res.json({
            success: true,
        });
    } catch (error) {
        console.log("err => ", error);
        res.status(500).json({
          message: "Не удалось обнвоить группу",
        });
      }
}

export const getOne = async (req, res) => {
    try {
      const groupId = req.params.id;
      const group = await groupModel.findByIdAndUpdate(
        {
          _id: groupId,
        },
        {
          returnDocument: "after",
        }
      ).populate("user");
      if (!group) {
        return res.status(404).json({
          message: "Группа не найдена",
        });
      }
      res.json(group);
    } catch (error) {
      console.log("err => ", error);
      res.status(500).json({
        message: "Не удалось получить группу",
      });
    }
  };