import {  useEffect, useState } from "react";
import "../style/createPost.feed.css";
import { Photo, Video,Document,Job,Celebrate,Poll,More,Comment, Event, Article,Earth } from "./custom.icon";
import { ProfileImage } from "./profileImage";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io"

export const CreatePostFeed = () => {

    const [pop, setPop] = useState(false);

    const handlePop = () => {
        setPop(!pop);
    }
    //modal functionality......
    useEffect(() => {
        if (pop) {
            document.body.style.overflow = "hidden";
            document.getElementById("outerLayout").style.backgroundColor ="rgb(0 0 0 / 75%)"
        }
        else {
            document.body.style.overflow = "visible";
        }
        document.getElementById("outerLayout")?.addEventListener("click", (e) => { if (!e.target.closest("#CreatePostPopDiv")) { setPop(false); console.log(e.target.className) } })
    }, [pop])
    
    

    return (
        <>
            {!pop && <div id="createPostFeed">
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
            </div>}
            {pop && <CreatePostPop handleClick={handlePop}/>}
        </>

    )
}



const CreatePostPop = ({handleClick}) => {
   
    
    const handleCreatePostInputHeight = (e) => {
        const inpt = document.getElementById("CreatePostPop_Input");
        const popContent = document.getElementById("popDivContent");

        inpt.style.height = "96px";
        let scrlHeight = e.target.scrollHeight;
        inpt.style.height = `${scrlHeight}px`;

        if (popContent.offsetHeight < Math.floor(window.innerHeight*0.5)) {
            popContent.className ="scrollVisible"
        }
        else {
            popContent.className = "";
        }
        console.log(window.innerHeight, popContent.offsetHeight)
       
    }

    const [title, setTitle] = useState("Create a post");
    const [image, setImage] = useState(null);

    const imagePreview = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImage(imageUrl);
    }

    return (
        <div id="outerLayout">
            <div id="CreatePostPopDiv">

                <div id="CreatePostPopDivTop" >
                    {title}
                    <div id="closeBtn" onClick={handleClick}><GrClose /></div>
                </div>

                {title === "Create a post" ? <div id="popDivContent" className="scrollVisible">
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
                        <textarea name="" onKeyUp={handleCreatePostInputHeight} id="CreatePostPop_Input" cols="30" rows="10" placeholder="What do you want to talk" ></textarea>
                    </div>
                </div> : <><div id="imagePreview"><img src={image} alt="" /></div></>}

                {image===null?<div id="CreatePostPopbottom">

                    <div>
                        <form action="" encType="multipart/form-data">
                            <input type="file" name="photo" id="photo" style={{ display: "none" }} onChange={imagePreview} />
                            <label htmlFor="photo" onClick={() => { setTitle("Edit your photo") }}><Photo /></label>
                            <input type="file" name="" id="video" style={{ display: "none" }} />
                            <label htmlFor="video"><Video /></label>
                        </form>
                        <Document />
                        <Job />
                        <Celebrate />
                        <Poll />
                        <More />
                    </div>

                    <div>
                        <Comment />
                        Anyone
                    </div>

                    <div disabled>Post</div>
                </div> : <><div id="imagePreviewBtn"><button onClick={() => { setTitle("Edit your photo") }}>Done</button></div></>}
            </div>
        </div>
    )
}