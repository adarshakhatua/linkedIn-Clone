const express = require("express");

const router = express.Router();

const UserCompany = require("../models/userCompany.model");

router.get("/", async (req, res) => {
    try {
        const userCompany = await UserCompany.find(req.query).lean().exec();
        return res.status(200).send({ userCompany: userCompany });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const userCompany = await UserCompany.findById(req.params.id).lean().exec();
        return res.status(200).send({ userCompany: userCompany });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const userCompany = await UserCompany.create(req.body);
        return res.status(201).send({ userCompany: userCompany });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const userCompany = await UserCompany.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({ userCompany: userCompany });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const userCompany = await UserCompany.findByIdAndDelete(req.params.id);
        return res.status(200).send({ userCompany: userCompany });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;