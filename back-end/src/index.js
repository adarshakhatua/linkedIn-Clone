const express = require("express");
const app = express();

const userProfileController = require("./controllers/userProfile.controlle");
const SkillController = require("./controllers/skills.controller");
const ReactionController = require("./controllers/reaction.controllers");
const CommentController = require("./controllers/comment.controller");
const PostController = require("./controllers/post.controller");
const ConnectionController = require("./controllers/connection.controller");
const FollowerController = require("./controllers/follower.controller");
const RecommendationController = require("./controllers/recommendation.controller");
const UserCompanyController = require("./controllers/userCompany.controller");
const UserEducationController = require("./controllers/userEducation.controller");
const UserSkillController = require("./controllers/userSkill.controller");


app.use(express.json());

app.use("/userProfiles", userProfileController);
app.use("/skills", SkillController);
app.use("/reactions", ReactionController);
app.use("/comments", CommentController);
app.use("/posts", PostController);
app.use("/connections", ConnectionController);
app.use("/followers", FollowerController);
app.use("/recommendations", RecommendationController);
app.use("/userCompanies", UserCompanyController);
app.use("/userEducations", UserEducationController);
app.use("/userSkills", UserSkillController);

module.exports = app;