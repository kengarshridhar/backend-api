import bcrypt from "bcryptjs";
import jwt from "../config/jwt";
import User from "../models/mongo/User";

export const loginUser = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user) { return res.status(404).json({ message: 'User Not Found' }); }

        const match = await bcrypt.compare(password, user.password);

        if(!match) { return res.status(401).json({ message: 'Invalid Password' }); }

        const token = jwt.generateToken(user);

        res.json({
            message: "Login Successfully",
            token,
            role: user.role
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
