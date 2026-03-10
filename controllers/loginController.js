import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";
import User from "../models/mongo/User.js";

export const loginUser = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user) { return res.status(404).json({ message: 'User Not Found' }); }

        const match = await bcrypt.compare(password, user.password);

        if(!match) { return res.status(401).json({ message: 'Invalid Password' }); }

        const token = generateToken(user);

        res.json({
            message: "Login Successfully",
            token,
            role: user.role
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    
    await User.findOne({ email })
    .then((existingUser) => {
        if(existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }
        // Register User
        return bcrypt.genSalt(10)
    })
    .then((salt) => {
        return bcrypt.hash(password, salt);        
    })
    .then((passwdHash) => {
        
        const body = {
            ...req.body, 
            password: passwdHash
        }
       
        console.log('[body ', body);

        User.create( body )
    })
    .then((user) => {
       res.status(201).json({
            message: "User created Successfully",
            data: user
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}