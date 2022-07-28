const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: false, },
    comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "comment", required: false, },
    entity_type: { type: String, required: true, enum: ["post", "comment"] },
    reaction_type: { type: String, required: true, enum: ["like", "celebrate", "support", "funny", "love", "insightful", "curious"], default: "like" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: "true" },
}, {
    versionKey:false,
    timestamps: true,

})

const Reaction = mongoose.model("reaction", reactionSchema);

module.exports = Reaction;