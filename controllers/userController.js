import User from '../models/mongo/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getSpecUser = async (req, res) => {
    const username = req.params.username;
    try {
        const user = await User.findOne({ username: username });
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createUser = async (req, res) => {
    
    try {
        const user = await User.insertOne(req.body);

        res.status(201).json({
            message: "User Created Successfully",
            data: user
        });

    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

export const updateUser = async (req, res) => {
    const username = req.params.username;
    try {
        const updatedUser = await User.findOneAndUpdate({ username: username }, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    const username = req.params.username;
    try {
        await User.findOneAndDelete({ username: username });
        res.status(204).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
