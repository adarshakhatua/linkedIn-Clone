const mongoose = require("mongoose");

const userSkillsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userprofile", required: true },
    skill_id: { type: mongoose.Schema.Types.ObjectId, ref: "skill", require: true, },
},
{
        versionKey: false,
        timestamps: true,
})


const UserSkills = mongoose.model("userSkill", userSkillsSchema);

module.exports = UserSkills;
