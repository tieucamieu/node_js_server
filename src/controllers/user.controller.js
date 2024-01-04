import userModel from "../models/user.model.js"

export default {
    findMany: (req, res) => {
        if (req.query.userId) {
            let user = userModel.findById(req.query.userId);
            return res.status(user ? 200 : 500).json({
                message: user ? "Tim user ok" : "Không tìm thấy",
                data: user ? user : null
            })
        }
        let users = userModel.findMany()
        return res.status(200).json(users)
    }
}