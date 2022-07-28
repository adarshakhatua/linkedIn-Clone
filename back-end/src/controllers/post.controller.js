const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");


router.get("/", async (req, res) => {
    try {
        const post = await Post.find(req.query).lean().exec();
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.post("/", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

module.exports = router;
