import "../../style/feed.page/content.feed.css";

import { BsThreeDots } from "react-icons/bs";
import { Earth,Like,Comment,Share,Send,Photo,Imogi,Create } from "../custom.icon";
import { ProfileImage } from "../profileImage";
import { MdArrowDropDown } from "react-icons/md";
import { LikeButton } from "../reactionButton";
import { useState } from "react";     
import { useEffect } from "react";

 


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

    const handleInputHeight = (e) => {
        let input = document.getElementById("postComment");
        input.style.height = "40px";
        input.style.padding = "10px 75px 10px 10px";
        let scrlheight = e.target.scrollHeight;
        input.style.height = `${scrlheight}px`;
        input.style.padding = "10px 10px 10px 10px";
    }
    
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
            <div id="contentMediaDiv">
                {/* <FiveImage
                    image1={"https://media-exp1.licdn.com/dms/image/C5622AQECvQIb47JHKQ/feedshare-shrink_800/0/1657865783895?e=1661385600&v=beta&t=pI2Sh5gxyxkXOzvA-41SkCFDvsbm0E5912Ogk2ehGx8"}
                    image2={"https://media-exp1.licdn.com/dms/image/C5622AQHzye7s5qb_nw/feedshare-shrink_800/0/1657865803998?e=1661385600&v=beta&t=lVjZeRIXd9hNnfereg6rgD-ARdl6SuGwAsMy4YaBIBc"}
                    image3={"https://media-exp1.licdn.com/dms/image/C5622AQGIgsBiuJFgJw/feedshare-shrink_800/0/1657865782130?e=1661385600&v=beta&t=PpP0kmvobyoarCYINozA925oL5K8M-A6ciJ-9vQZGC8"}
                    image4={"https://media-exp1.licdn.com/dms/image/C5622AQFdhaVo06PX0A/feedshare-shrink_800/0/1657865793146?e=1661385600&v=beta&t=9eUpJUlIbzyGNn383ZWdzcJwr6dFvLgl5rNUh_fZKO0"}
                    image5={"https://media-exp1.licdn.com/dms/image/C5622AQE5eAmZAts0Ug/feedshare-shrink_2048_1536/0/1657577356995?e=1661385600&v=beta&t=IZxRDgBVCNqskN6WATQO6fQWgaLAWKOkpHc2UBBHxOY"}
                /> */}
                {/* <FourImage
                    image1={"https://media-exp1.licdn.com/dms/image/C5622AQECvQIb47JHKQ/feedshare-shrink_800/0/1657865783895?e=1661385600&v=beta&t=pI2Sh5gxyxkXOzvA-41SkCFDvsbm0E5912Ogk2ehGx8"}
                    image2={"https://media-exp1.licdn.com/dms/image/C5622AQHzye7s5qb_nw/feedshare-shrink_800/0/1657865803998?e=1661385600&v=beta&t=lVjZeRIXd9hNnfereg6rgD-ARdl6SuGwAsMy4YaBIBc"}
                    image3={"https://media-exp1.licdn.com/dms/image/C5622AQGIgsBiuJFgJw/feedshare-shrink_800/0/1657865782130?e=1661385600&v=beta&t=PpP0kmvobyoarCYINozA925oL5K8M-A6ciJ-9vQZGC8"}
                    image4={"https://media-exp1.licdn.com/dms/image/C5622AQFdhaVo06PX0A/feedshare-shrink_800/0/1657865793146?e=1661385600&v=beta&t=9eUpJUlIbzyGNn383ZWdzcJwr6dFvLgl5rNUh_fZKO0"}
                /> */}
                {/* <ThreeImage
                    image1={"https://media-exp1.licdn.com/dms/image/C5622AQF4fFNF6wigJA/feedshare-shrink_800/0/1656695214428?e=1661385600&v=beta&t=q1SAv79WzwYgp1GGirQ8mhfynQmwEV3EciMb7q5g8KE"}
                    image2={"https://media-exp1.licdn.com/dms/image/C5622AQETYzBh_8T1Vw/feedshare-shrink_800/0/1656695214380?e=1661385600&v=beta&t=gKBVltzrk7oz7XYa55xeiwkRi_2QVaKlqXqaaZqwx4E"}
                    image3={"https://media-exp1.licdn.com/dms/image/C5622AQGrmk_T0XNzLg/feedshare-shrink_800/0/1656695214325?e=1661385600&v=beta&t=QDQD0GE7Zu5_R-6SVXUw3y7vyhbqU0K4V3nChwuAnzE"}
                /> */}
                {/* <DualImage
                    image1={"https://media-exp1.licdn.com/dms/image/C4D22AQFTk4Olgg74BA/feedshare-shrink_800/0/1657859626806?e=1661385600&v=beta&t=mduonMGO4Qt1VaePb5jjuNFUUd9hj365sZn_DLzyqfg"}
                    image2={"https://media-exp1.licdn.com/dms/image/C4D22AQHbIrqPWqMfUQ/feedshare-shrink_800/0/1657859623600?e=1661385600&v=beta&t=YplV04ACFbfl7S2SbzF25fhIGQdXcWgpH7SM4EM2dlw"}
                /> */}
                <SingleImage image1={"https://media-exp1.licdn.com/dms/image/sync/C5622AQHXXRhsE9jaZg/feedshare-shrink_800/0/1658669022016?e=1661385600&v=beta&t=2DpP-Auisjd-zNBDPy9W-CPhcc6-cvhvmou0PhmSV94"}/>
            </div>

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

                    <ShareButton/>

                    <button>
                        <Send />
                        <span>Send</span>
                    </button>

                </div>

            </div>

            <div id="contentFeedComment">

                <div id="postCommentDiv">
                    <ProfileImage
                        image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"}
                        imageStyle={{ height: "40px", width: "40px" }} />
                    <textarea type="text" placeholder="Add a comment..." id="postComment" onKeyUp={handleInputHeight}/>
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
                    </div>
                    <div className="InteractionDiv">
                        <div id="LikeDiv"><LikeButton buttonName={"Like"} /></div>
                        <div id="commentDiv">Reply</div>
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
                          
                        </div>
                    
                        <div className="InteractionDiv">
                            <div id="LikeDiv"><LikeButton buttonName={"Like"} /></div>
                            <div id="commentDiv">Reply</div>
                        </div>
                        
                </div>

            </div>

        </div>
    )
}




const ShareButton = () => {

    const [sharePop, setSharePop] = useState(false);
    const handleSharePop = () => {
        setSharePop(!sharePop);
    }

    return (
        <div id="shareDiv" onClick={handleSharePop}>
            <button>
                <Share />
                <span>Share</span>
            </button>
            {sharePop && <div id="sharePop">

                <div id="repost" >
                    <Share />
                    <div className="sharePopSubDiv">
                        <h3>Repost</h3>
                        <p>Instantly bring #Subham's post to other's feeds</p>
                    </div>
                </div>

                <div id="sharewithThoughts" >
                    <Create style={{ height: "22px", width: "22px" }} />
                    <div className="sharePopSubDiv">
                        <h3>Share with your thoughts</h3>
                        <p>Create a new post with #Subham's post attached</p>
                    </div>
                </div>

            </div>}
            
        </div>
    )
}

const FiveImage = ({image1,image2,image3,image4,image5}) => {
    return (
        <div id="FiveImage">
            <img src={image1} alt="" className="imageRow1"/>
            <img src={image2} alt="" className="imageRow1" />
            <img src={image3} alt="" className="imageRow2" />
            <img src={image4} alt="" className="imageRow2" />
            <img src={image5} alt="" className="imageRow2" />
        </div>
    )
}

const FourImage = ({ image1, image2, image3, image4 }) => {
    return(
        <div id="FourImage">
            <div className="topImage"><img src={image1} alt="" /></div>
            <div><img src={image2} alt="" className="bottomImg" /></div>
            <div><img src={image3} alt="" className="bottomImg" /></div>
            <div><img src={image4} alt="" className="bottomImg" /></div>
        </div>
    )
}

const ThreeImage = ({ image1, image2, image3 }) => {
    return (
        <div id="ThreeImage">
            <div className="top"><img src={image1} alt="" /></div>
            <div><img src={image2} alt="" /></div>
            <div><img src={image3} alt="" /></div>
        </div>
    )
}

const DualImage = ({ image1, image2 }) => {
    return (
        <div id="dualImage">
            <div><img src={image1} alt="" /></div>
            <div><img src={image2} alt="" /></div>
        </div>
    )
}
const SingleImage = ({ image1 }) => {
    return (
        <div id="singleImage"><img src={image1} alt="" /></div>
    )
}