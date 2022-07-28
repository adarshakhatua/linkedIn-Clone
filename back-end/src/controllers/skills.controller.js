const express = require("express");

const router = express.Router();
const Skills = require("../models/skills.model");

router.get("/", async (req, res) => {
    try {
        const skills = await Skills.find(req.query).lean().exec();
        return res.status(200).send({ skills: skills });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const skills = await Skills.findById(req.params.id).lean().exec();
        return res.status(200).send({ skills: skills });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const skills = await Skills.create(req.body);
        return res.status(201).send({ skills: skills });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const skills = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ skills: skills });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const skills = await Skills.findByIdAndDelete(req.params.id);
        return res.status(200).send({ skills: skills });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;