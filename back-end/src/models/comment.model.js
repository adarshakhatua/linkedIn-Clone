const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: false, },
    comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: false, },
    entity_type: { type: String, required: true, enum: ["post", "comment"] },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required: "true" },
    comment_text: { type: String, required: false },
    comment_image: { type: String, required: false },
    media_type: { type: String, required: false,default:"image" },
    is_commetable: { type: Boolean, required: true, default: true },
},{
    versionKey:false,
    timestamps: true,

})

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;