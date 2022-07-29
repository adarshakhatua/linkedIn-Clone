const express = require("express");

const router = express.Router();

const Comment = require("../models/comment.model");

router.get("/", async (req, res) => {
    try {
        let page = req.query.page;
        let 
        const comment = await Comment.find(req.query).lean().exec();
        return res.status(200).send({ comment: comment });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).lean().exec();
        return res.status(200).send({ comment: comment });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send({ comment: comment });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ comment: comment });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(200).send({ comment: comment });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;