const express = require("express");

const router = express.Router();

const UserSkill = require("../models/userSkills.model");

router.get("/", async (req, res) => {
    try {
        const userSkill = await UserSkill.find(req.query).lean().exec();
        return res.status(200).send({ userSkill: userSkill });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const userSkill = await UserSkill.findById(req.params.id).lean().exec();
        return res.status(200).send({ userSkill: userSkill });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const userSkill = await UserSkill.create(req.body);
        return res.status(201).send({ userSkill: userSkill });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const userSkill = await UserSkill.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({ userSkill: userSkill });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const userSkill = await UserSkill.findByIdAndDelete(req.params.id);
        return res.status(200).send({ userSkill: userSkill });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;