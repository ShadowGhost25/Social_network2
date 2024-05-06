import musicModel from "../models/Music.js";
export const create = async (req,res) =>{
    try {
        const doc = new musicModel({
            title: req.body.title,
            author: req.body.author,
        })
        const music = await doc.save()
        res.json(music)
    } catch (error) {
        console.log("err => ", error);
        res.status(500).json({
          message: "Не удалось добавить музыку",
        });
    }
}