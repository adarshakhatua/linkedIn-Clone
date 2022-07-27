const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    is_connected: { type: Boolean, required: true, default: false, enum: [false] },
},
{
    versionKey: false,
    timestamps: true,
})

const Connection = mongoose.model("connection", connectionSchema);

module.exports = Connection;

