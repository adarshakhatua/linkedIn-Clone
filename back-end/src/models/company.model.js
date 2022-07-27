const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    type: { type: String, required: true },
    description: { type: String, required: true },
    About: { type: String, required: true },
},
{
    versionKey: false,
    timestamps: true,
})

const Company = mongoose.model("company", companySchema);

module.exports = Company;