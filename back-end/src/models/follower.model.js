const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    following_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    is_connected: { type: Boolean, required: true, default: true, enum: [true] },
},
    {
        versionKey: false,
        timestamps: true,
    })

const Follower = mongoose.model("follower", followerSchema);

module.exports = Follower;