import express from 'express';
import os from "os";

const router = express.Router();

const userInfo = os.userInfo();

router.get("/", (req, res) => {
    res.send(`Handled by worker ${process.pid}`);
});

router.get("/hello", (req, res) => {
    res.send(`<h1>Hello, ${userInfo.username}</h1>`);
});

export default router;