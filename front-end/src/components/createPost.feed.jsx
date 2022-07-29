import { useState } from "react";
import "../style/createPost.feed.css";
import { Photo, Video, Event, Article,Earth } from "./custom.icon";
import { ProfileImage } from "./profileImage";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io"

export const CreatePostFeed = () => {
    const [pop, setPop] = useState(false);
    const handlePop = () => {
        setPop(!pop);
    }
    return (
        <div id="createPostFeed">
            <div id="createPostFeed1">
               
                <ProfileImage
                    image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"}
                    imageStyle={{ height: "48px", width: "48px", top: "0px" }}
                />
                <div id="createrInputDiv" onClick={handlePop}>Start a post about a topic that excites you</div>
            </div>

            <div id="createPostFeed2">
                <div id="createPostPhotoDiv" className="createPostComponent"><Photo /><p>Photo</p></div>
                <div id="createPostVideoDiv" className="createPostComponent"><Video /><p>Photo</p></div>
                <div id="createPostEventDiv" className="createPostComponent"><Event /><p>Event</p></div>
                <div id="createPostWriteArticleDiv" className="createPostComponent"><Article /><p>Write article</p></div>
            </div>
            
            <CreatePostPop/>

        </div>
    )
}



const CreatePostPop = () => {
    return (
        <div id="CreatePostPopDiv">

            <div id="CreatePostPopDivTop">
                Create a post
                <div id="closeBtn"><GrClose /></div>
            </div>

            <div id="popDivContent">
                <div id="CreatePostPopDivProfile">
                    <ProfileImage
                        image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"}
                        imageStyle={{ height: "48px", width: "48px", }}
                    />
                    <div id="dropDownDiv">
                        Adarsha Khatua
                        <div id="dropDownBtn">
                            <Earth />
                            Anyone
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>

                <div id="CreatePostPopInput">
                    <textarea name="" id="" cols="30" rows="10" placeholder="What do you want to talk"></textarea>
                </div>
           </div>

        </div>
    )
}