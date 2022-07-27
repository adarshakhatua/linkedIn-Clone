const mongoose = require("mongoose");

const userEducationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId,ref:"userProfile", required: true },
    institution_id: { type: mongoose.Schema.Types.ObjectId, ref: "institution", required: true },
    grade: { type: String, Required: false },
},
{
    versionKey: false,
    timestamps: true,
})

const UserEducation = mongoose.model("userEducation", userEducationSchema);

module.exports = UserEducation;
