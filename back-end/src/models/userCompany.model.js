const mongoose = require("mongoose");

const userCompanySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: true },
    start_year: { type: Number, requird: true },
    end_year: { type: Number, required: true },
    salary: { type: Number, required: false },
},
{
    versionKey: false,
    timestamps: true,
})

const UserCompany = mongoose.model("userCompany", userCompanySchema);

module.exports = UserCompany;
