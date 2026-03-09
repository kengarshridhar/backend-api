import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/mongo/User";

export const loginUser = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user) { return res.status(404).json({ message: 'User Not Found' }); }

        const match = await bcrypt.compare(password, user.password);

        if(!match) { return res.status(401).json({ message: 'Invalid Password' }); }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d'}
        );

        res.json({
            message: "Login Successfully",
            token,
            role: user.role
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
