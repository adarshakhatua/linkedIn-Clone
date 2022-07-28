const express = require('express');

const router = express.Router();

const Connection = require("../models/connection.model");

router.get("/", async (req, res) => {
    try {
        const connection = await Connection.find(req.query).lean().exec();
        return res.status(200).send({ connection: connection });
        
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const connection = await Connection.findById(req.params.id).lean().exec();
        return res.status(200).send({ connection: connection });

    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const connection = await Connection.create(req.body);
        return res.status(201).send({ connection: connection });

    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const connection = await Connection.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({ connection: connection });

    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const connection = await Connection.findByIdAndDelete(req.params.id);
        return res.status(200).send({ connection: connection });

    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;