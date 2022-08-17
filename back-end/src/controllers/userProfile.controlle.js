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


router.post("/", uploadFiles([{ name: "profile_pic", maxCount: 1, }, { name: "cover_pic", maxCount: 1, }], "fields"),  async (req, res) => {
    try {
        let userProfile;
        if (req.files) { userProfile = await UserProfile.create({ ...req.body, profile_pic: req.files.profile_pic[0].path, cover_pic: req.files.cover_pic[0].path }); }
        else { userProfile = await UserProfile.create(req.body); }
        return res.status(201).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


router.post("/profile_pic", uploadFiles("profile_pic", "single"), async (req, res) => {
    try {
        let userProfile;
        if (req.file) { userProfile = await UserProfile.create({ ...req.body, profile_pic: req.file.path}); }
        else { userProfile = await UserProfile.create(req.body); }
        return res.status(201).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/cover_pic", uploadFiles("cover_pic", "single"), async (req, res) => {
    try {
        let userProfile;
        if (req.file) { userProfile = await UserProfile.create({ ...req.body, cover_pic: req.file.path }); }
        else { userProfile = await UserProfile.create(req.body); }
        return res.status(201).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", uploadFiles([{ name: "profile_pic", maxCount: 1, }, { name: "cover_pic", maxCount: 1, }], "fields"),  async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, { ...req.body, profile_pic: req.files.profile_pic[0]?.path, cover_pic: req.files.cover_pic[0]?.path }, { new: true });
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/profile_pic/:id", uploadFiles("profile_pic", "single"), async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, { ...req.body, profile_pic: req.file.path }, { new: true });
        return res.status(200).send({ userProfile: userProfile });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/cover_pic/:id", uploadFiles("cover_pic", "single"), async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, { ...req.body, cover_pic: req.file.path }, { new: true });
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
