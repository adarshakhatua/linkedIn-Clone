const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    cover_pic: { type: String, required: false },
    profile_type:{type:String,required:true,enum:["personal","influencer","company","institution"],default:"personal"},
    email: { type: String, required: true,unique:true },
    password:{type:String,required:true},
    phone: { type: Number, required: true },
    place: { type: String, required: true },
    description: { type: String, required: false },
    About: { type: String, required: false },
},
{
    versionKey: false,
    timestamps: true,
})

const UserProfile = mongoose.model("userProfile",userProfileSchema);

module.exports = UserProfile;