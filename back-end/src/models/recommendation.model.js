const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
},
{
    versionKey: false,
    timestamps:true,
})

const Recommendation = mongoose.model("recommendation", recommendationSchema);

module.exports = Recommendation;
