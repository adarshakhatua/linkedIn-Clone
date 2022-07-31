const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    entity_type: { type: String, required: true, enum: ["post", "repost","sharepost"] },
    post_text: { type: String, required: false },
    post_media: { type: String, required: false },
    media_type: { type: String, required: false, },
    is_commetable: { type: Boolean, required: false, default: true },
    post_id:{type:mongoose.Schema.Types.ObjectId,required:false},
}, {
    versionKey:false,
    timestamps:true,

})

const Post = mongoose.model("post", postSchema);

module.exports = Post;