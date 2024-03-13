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