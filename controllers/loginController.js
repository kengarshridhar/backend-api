import bcrypt from "bcryptjs";
import { generateToken, generateRefreshToken } from "../config/jwt.js";
import User from "../models/mongo/User.js";

export const loginUser = async (req, res ) => {
    // login with email or username 
    // @parm identifier cantain email or username
    const { identifier, password } = req.body;
    
    User.findOne({
        $or: [
            { email: identifier },
            { username: identifier }
        ]
    }).select("+password")
    .then((user) => {
        if (!user) { return res.status(404).json({ message: 'User Not Found' }); }
        return bcrypt.compare(password, user.password)
        .then((match) => {

            if(!match) { return res.status(401).json({ message: 'Invalid Password' }); }
            
            return user;
        });
    })
    .then((user) => {
        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user);

        res.json({
            message: "Login Successfully",
            token,
            refreshToken,
            role: user.role
        });
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    })
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