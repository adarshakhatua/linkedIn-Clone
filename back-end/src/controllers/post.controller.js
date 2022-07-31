const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");
const fileUpload = require('../middlewares/fileUpload');

router.get("/", async (req, res) => {
    try {
        const post = await Post.find(req.query).lean().exec();
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/:userId/", fileUpload("photo","single"), async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, post_media:req.file.path});
        return res.status(201).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:userId/:id", fileUpload("photo", "single"), async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { ...req.body, post_media: req.file.path }, { new: true });
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).send({ post: post });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;
