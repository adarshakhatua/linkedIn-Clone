const express = require("express");

const router = express.Router();

const Follower = require("../models/follower.model");

router.get("/", async (req, res) => {
    try {
        const follower = await Follower.find(req.query).lean().exec();
        return res.status(200).send({ follower: follower });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const follower = await Follower.findById(req.params.id).lean().exec();
        return res.status(200).send({ follower: follower });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.post("/", async (req, res) => {
    try {
        const follower = await Follower.create(req.body);
        return res.status(201).send({ follower: follower });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const follower = await Follower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ follower: follower });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const follower = await Follower.findByIdAndDelete(req.params.id);
        return res.status(200).send({ follower: follower });
    }
    catch (err) {
        return res.status(500).send({ message: message });
    }
})

module.exports = router;