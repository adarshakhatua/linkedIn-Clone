import "../style/content.feed.css";

import { BsThreeDots } from "react-icons/bs";
import { Earth,Like,Comment,Share,Send,Photo,Imogi } from "./custom.icon";
import { ProfileImage } from "./profileImage";
import { MdArrowDropDown } from "react-icons/md";
import { LikeButton } from "./reactionButton";


// https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l
// https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo
// https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi
// https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl
// https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm
// https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl
// https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh

// https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss
// https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3
// https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49
// https://static-exp1.licdn.com/sc/h/e1vzxs43e7ryd6jfvu7naocd2
// https://static-exp1.licdn.com/sc/h/6namow3mrvcg3dyuevtpfwjm0
// https://static-exp1.licdn.com/sc/h/6gz02r6oxefigck4ye888wosd
// https://static-exp1.licdn.com/sc/h/4rw9bhaoyh1622ce65fshynuw
export const Contentfeed = () => {

   

    return (
        <div id="contentFeed">

            <div id="contentCreatorDiv">

                <div id="contentCreatorDetailsDiv">

                    <div id="contentCreatorImageDiv">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQFybdyJxnwFQA/company-logo_100_100/0/1552144829593?e=1666828800&v=beta&t=VBkXcs-3xopgQVAx0QKdSXxMqAtKXsZqvIGURoyfrFw" alt="" />
                    </div>

                    <div id="contentCreatorDetails">
                        <h3>JavaScript</h3>
                        <p>337,018 followers</p>
                        <p>1w • <span><Earth/></span></p>
                    </div>

                </div>

                <div id="contentFeedMoreButtton">
                    <BsThreeDots />
                </div>

            </div>

            <div id="contentTextDiv"></div>
            <div id="contentMediaDiv"></div>

            <div id="contentFeedBottom">

                <div id="contentFeedStat">
                    <div id="contentFeedStatLeft">
                        <div>
                            <img src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" alt="" />
                            <img src="https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3" alt="" />
                            <img src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" alt="" />
                        </div>
                        <span>692</span>
                    </div>

                    <div id="contentFeedStatRight">
                        <span>41 comments</span>• 
                        <span>1 share</span>
                    </div>
                </div>

                <div id="contentFeedEngageDiv">
                    <LikeButton icon={<Like />} buttonName={"Like"} />
                    <button>
                        <Comment />
                        <span>Comment</span>
                    </button>

                    <div id="shareDiv">
                        <button>
                            <Share />
                            <span>Share</span>
                        </button>
                        <div id="sharePop"></div>
                    </div>

                    <button>
                        <Send />
                        <span>Send</span>
                    </button>

                </div>

            </div>

            <div id="contentFeedComment">

                <div id="postCommentDiv">
                    <ProfileImage imageStyle={{height:"40px",width:"40px"}}/>
                    <input type="text" placeholder="Add a comment..." />
                    <span>
                        <span><Imogi style={{ color: "rgb(0 0 0 / 60%)" }} /></span>
                        <span><Photo style={{ color: "rgb(0 0 0 / 60%)" }} /></span>
                    </span> 
                </div>

                <div id="commentSortDiv">
                    <div>Most relevant <MdArrowDropDown style={{fontSize:"20px"}}/></div>
                </div>

                <div id="Comment">

                    <div id="CommentOwnerImg">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHe0PzWD9sQpg/profile-displayphoto-shrink_100_100/0/1657731060961?e=1664409600&v=beta&t=9UyPihlhfPxxEH8IjArwMeqDhIfc3L8ViUuRAPIhPVQ" alt="" />
                    </div>

                    <div id="CommentContent">

                        <div id="CommentOwnerDetails">
                            <div id="CommentOwnerDetailsTop">
                                <p><span>Alireza Bahrami</span> • <span>3rd+</span></p>
                                <p>1d <span ><BsThreeDots style={{fontSize:"16px"}}/></span></p>
                            </div>
                            <p id="Ownerdescription">Django backend developer</p>
                        </div>

                        <div id="commentTxt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque commodi placeat velit? Fugiat quas sequi eligendi, animi minus magnam praesentium reprehenderit natus, inventore id quasi nostrum a? Incidunt, recusandae.
                        </div>

                        <div className="InteractionDiv">
                            <div id="LikeDiv"><LikeButton buttonName={"Like"} /></div>
                            <div id="commentDiv">Reply</div>
                        </div>
                    </div>
                </div>

                <div id="Reply">
                        
                        <div id="CommentOwnerImg">
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHe0PzWD9sQpg/profile-displayphoto-shrink_100_100/0/1657731060961?e=1664409600&v=beta&t=9UyPihlhfPxxEH8IjArwMeqDhIfc3L8ViUuRAPIhPVQ" alt="" />
                        </div>

                        <div id="ReplyContent">

                            <div id="ReplyOwnerDetails">
                                <div id="ReplyOwnerDetailsTop">
                                    <p><span>Alireza Bahrami</span> • <span>3rd+</span></p>
                                    <p>1d <span ><BsThreeDots style={{ fontSize: "16px" }} /></span></p>
                                </div>
                                <p id="Ownerdescription">Django backend developer</p>
                            </div>

                            <div id="ReplyTxt">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque commodi placeat velit? Fugiat quas sequi eligendi, animi minus magnam praesentium reprehenderit natus, inventore id quasi nostrum a? Incidunt, recusandae.
                            </div>
                            
                            <div className="InteractionDiv">
                            <div id="LikeDiv"><LikeButton buttonName={"Like"} /></div>
                                <div id="commentDiv">Reply</div>
                            </div>
                        </div>
                        
                        
                </div>

            </div>

        </div>
    )
}


