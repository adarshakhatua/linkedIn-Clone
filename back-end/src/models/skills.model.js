const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true, },
},
{
    versionKey: false,
    timestamps:true,
})

const Skills = mongoose.model("skill", skillsSchema);

module.exports = Skills;