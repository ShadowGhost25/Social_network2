export const test = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("err => ", error)
        res.status(500).json({
            message: "ошибка"
        })
    }
}