const express = require("express");
const UserProfile = require("../models/userProfile.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const userProfile = await UserProfile.find(req.query).lean().exec();
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const userProfile = await UserProfile.findById(req.params.id).lean().exec();
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


router.post("/", async (req, res) => {
    try {
        const userProfile = await UserProfile.create(req.body);
        return res.status(201).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndDelete(req.params.id);
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;