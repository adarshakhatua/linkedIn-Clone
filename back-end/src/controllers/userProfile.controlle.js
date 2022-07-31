const express = require("express");
const UserProfile = require("../models/userProfile.model");
const uploadFiles = require("../middlewares/fileUpload");

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


router.post("/", uploadFiles("profile_pic","single"), async (req, res) => {
    try {
        const userProfile = await UserProfile.create({ ...req.body, profile_pic:req.file.path});
        return res.status(201).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", uploadFiles("profile_pic", "single"), async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, { ...req.body, profile_pic:req.file.path}, { new: true });
        console.log(req.file);
        console.log(req.body);
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