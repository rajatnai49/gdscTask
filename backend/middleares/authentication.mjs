import User from "../models/User.mjs";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Login first"
            })
        }
        else {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded._id).exec()
        }

        next();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        })
    }
}

export { isAuthenticated }