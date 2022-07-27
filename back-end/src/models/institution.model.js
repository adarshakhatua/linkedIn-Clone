const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    type: { type: String, required: true },
    description: { type: String, required: true },
    about: { type: String, required: true },  
},
{
    versionKey: false,
    timestamps: true,
})

const Institution = mongoose.model("institution", institutionSchema);

module.exports = Institution;

