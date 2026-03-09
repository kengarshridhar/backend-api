import { verifyToken } from "../../config/jwt.js";

export const verifyAuthToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "no token found" });
    }

    try {
        const decode = verifyToken(token);

        req.user = decode;

        next();

    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
}