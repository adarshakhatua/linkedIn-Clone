const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    profile_type:{type:String,req:true,enum:["person","instituion","company"]},
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    About: { type: String, required: false },
},
{
    versionKey: false,
    timestamps: true,
})

const UserProfile = mongoose.model("userProfile",userProfileSchema);

module.exports = UserProfile;