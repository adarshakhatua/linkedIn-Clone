const express = require("express");

const router = express.Router();

const UserEducation = require("../models/userEducation.model");

router.get("/", async (req, res) => {
    try {
        const userEducation = await UserEducation.find(req.query).lean().exec();
        return res.status(200).send({ userEducation: userEducation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const userEducation = await UserEducation.findById(req.params.id).lean().exec();
        return res.status(200).send({ userEducation: userEducation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


router.post("/", async (req, res) => {
    try {
        const userEducation = await UserEducation.create(req.body);
        return res.status(201).send({ userEducation: userEducation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const userEducation = await UserEducation.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({ userEducation: userEducation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const userEducation = await UserEducation.findByIdAndDelete(req.params.id);
        return res.status(200).send({ userEducation: userEducation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;