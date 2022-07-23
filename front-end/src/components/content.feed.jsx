import "../style/content.feed.css";

import { BsThreeDots } from "react-icons/bs";
import { Earth,Like,Comment,Share,Send } from "./custom.icon";

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
                        <span></span>
                        <span>692</span>
                    </div>

                    <div id="contentFeedStatRight">
                        <span>41 comments</span>
                        <span>1 share</span>
                    </div>
                </div>

                <div id="contentFeedEngageDiv">

                    <button>
                        <Like />
                        <span>Like</span>
                        <span id="reactionPop">
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl" alt="" />
                            <img classname="animate bounce" src="https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh" alt="" />
                        </span>
                    </button>

                    <button>
                        <Comment />
                        <span>Comment</span>
                    </button>

                    <button>
                        <Share />
                        <span>Share</span>
                    </button>

                    <button>
                        <Send />
                        <span>Send</span>
                    </button>

                </div>

            </div>

        </div>
    )
}