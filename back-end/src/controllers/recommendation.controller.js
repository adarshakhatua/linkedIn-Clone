const express = require("express");

const router = express.Router();

const Recommendation = require("../models/recommendation.model");

router.get("/", async (req, res) => {
    try {
        const recommendation = await Recommendation.find(req.query).lean().exec();
        return res.status(200).send({ recommendation: recommendation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const recommendation = await Recommendation.findById(req.params.id).lean().exec();
        return res.status(200).send({ recommendation: recommendation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const recommendation = await Recommendation.create(req.body);
        return res.status(201).send({ recommendation: recommendation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const recommendation = await Recommendation.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(200).send({ recommendation: recommendation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const recommendation = await Recommendation.findByIdAndDelete(req.params.id);
        return res.status(200).send({ recommendation: recommendation });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;