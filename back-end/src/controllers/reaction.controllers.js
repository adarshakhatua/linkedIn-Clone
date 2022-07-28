const express = require("express");

const router = express.Router();

const Reaction = require("../models/reaction.model");

router.get("/", async (req, res) => {
    try {
        const reaction = await Reaction.find(req.query).lean().exec();
        return res.status(200).send({ reaction: reaction });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const reaction = await Reaction.findById(req.params.id).lean().exec();
        return res.status(200).send({ reaction: reaction });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const reaction = await Reaction.create(req.body);
        return res.status(201).send({ reaction: reaction });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const reaction = await Reaction.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({ reaction: reaction });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const reaction = await Reaction.findByIdAndDelete(req.params.id);
        return res.status(200).send({ reaction: reaction });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;