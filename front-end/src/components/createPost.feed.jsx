import {  useEffect, useState } from "react";
import "../style/createPost.feed.css";
import { Photo, Video,Document,Job,Celebrate,Poll,More,Comment, Event, Article,Earth } from "./custom.icon";
import { ProfileImage } from "./profileImage";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io"
import { useSelector,useDispatch } from "react-redux";
import { createPostPopMount, createPostPopUnmount, createPostText, createPostTitleMount, imagePreviewBottonDivMount, imagePreviewBottonDivUnmount, imagePreviewImageMount, imagePreviewImageUnMount } from "../redux/component/action";


export const CreatePostFeed = () => {

    const modal = useSelector((store) => store.component.create_post_pop);
    const dispatch = useDispatch();
    const handleModal = () => {
        dispatch(createPostPopMount());
    }
    //modal functionality......
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
            document.getElementById("outerLayout").style.backgroundColor ="rgb(0 0 0 / 75%)"
        }
        else {
            document.body.style.overflow = "visible";
        }
        document.getElementById("outerLayout")?.addEventListener("click", (e) => { if (!e.target.closest("#CreatePostPopDiv")) { dispatch(createPostPopUnmount()) } })
    }, [modal])

    return (
        <>
            {!modal && <div id="createPostFeed">
                <div id="createPostFeed1">

                    <ProfileImage
                        image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"}
                        imageStyle={{ height: "48px", width: "48px", top: "0px" }}
                    />
                    <div id="createrInputDiv" onClick={handleModal}>Start a post about a topic that excites you</div>
                </div>

                <div id="createPostFeed2">
                    <div id="createPostPhotoDiv" className="createPostComponent"><Photo /><p>Photo</p></div>
                    <div id="createPostVideoDiv" className="createPostComponent"><Video /><p>Photo</p></div>
                    <div id="createPostEventDiv" className="createPostComponent"><Event /><p>Event</p></div>
                    <div id="createPostWriteArticleDiv" className="createPostComponent"><Article /><p>Write article</p></div>
                </div>
            </div>}
            {modal && <CreatePostPop />}
        </>

    )
}


const CreatePostPop = () => {
   
    const title = useSelector((store) => store.component.create_post_title);
    const image = useSelector((store) => store.component.image_preview_image);
    const imagePreviewBtn = useSelector((store) => store.component.image_preview_botton_div);
    // console.log(imagePreviewBtn);
    const dispatch = useDispatch();

    return (
        <div id="outerLayout">
            <div id="CreatePostPopDiv">

                <div id="CreatePostPopDivTop" >
                    {title}
                    <div id="closeBtn"
                        onClick={() => {
                            dispatch(createPostPopUnmount())
                            dispatch(imagePreviewImageUnMount())
                        }}><GrClose /></div>
                </div>
                
                {(title === "Create a post" && (image !== null && image !== undefined)) ? <><Profile /></> : <></>}
                {(title === "Create a post" && image===null) ? <Profile/> : <><div id="imagePreview"><img src={image} alt="" /></div></>}
                {(image === null || (image && (title === "Create a post"))) && <BottomMedia />}

                {imagePreviewBtn && <ImagePreviewButton />}
                
                
            </div>
        </div>
    )
}


const Profile = () => {

    const handleCreatePostInputHeight = (e) => {

        const inpt = document.getElementById("CreatePostPop_Input");
        const popContent = document.getElementById("popDivContent");

        inpt.style.height = "96px";
        let scrlHeight = e.target.scrollHeight;
        inpt.style.height = `${scrlHeight}px`;

        if (popContent.offsetHeight < Math.floor(window.innerHeight * 0.5)) {
            popContent.className = "scrollVisible"
        }
        else {
            popContent.className = "";
        }

    }
    const dispatch = useDispatch();

    return (
        <div id="popDivContent" className="scrollVisible">
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
                <textarea
                    name=""
                    onKeyUp={handleCreatePostInputHeight}
                    id="CreatePostPop_Input"
                    cols="30"
                    rows="10"
                    placeholder="What do you want to talk"
                    onChange={(e) => { dispatch(createPostText(e.target.value))}}
                ></textarea>
            </div>
        </div>
    )
}


const BottomMedia = () => {

    
    const dispatch = useDispatch();
    const title = useSelector((store) => store.component.create_post_title);
    const image = useSelector((store) => store.component.image_preview_image);
    const text = useSelector((store) => store.component.create_post_text).trim();
    // console.log(text);
    const imagePreview = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        dispatch(imagePreviewImageMount(imageUrl));
    }
    const [disable, setDisable] = useState(false);
    
    return (
        <div id="CreatePostPopbottom">

            <div className={(image && title==="Create a post")?"notAllowed":""} id="createPostMediaBtn">
                <form action="" encType="multipart/form-data">
                    <input type="file" name="photo" id="photo" style={{ display: "none" }} onChange={imagePreview} disabled={disable}/>
                    <label htmlFor="photo"
                        onClick={() => {
                            if (image && (title === "Create a post")) {
                                setDisable(true);
                                return;
                            }
                            dispatch(createPostTitleMount("Edit your photo"));
                            setTimeout(() => {
                                document.getElementById("CreatePostPopbottom").style.display = "none";
                                dispatch(imagePreviewBottonDivMount())
                            }, 0)
                        }}>
                        <Photo />
                    </label>
                    <input type="file" name="" id="video" style={{ display: "none" }} disabled={disable}/>
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

            <div className={((image || (text !== "")) && title === "Create a post") ? "Allowed" : "Disable"}
                onClick={() => {
                    if ((image || (text!=="")) && title === "Create a post") {
                        console.log(!disable)
                    }
                    else { return }
                    
                }}>
                Post
            </div>
        </div>
    )
}


const ImagePreviewButton = () => {

    const dispatch = useDispatch();
    const image = useSelector((store) => store.component.image_preview_image);

    useEffect(() => {
        if (image !== null) {
            document.getElementById("backBtn").style.display = "none";
            document.getElementById("doneBtn").disabled = false;
            document.getElementById("doneBtn").setAttribute("style", "cursor:poiter;background-color:#177fe8;color:white");
        }
        else if (image === null) {
            document.getElementById("doneBtn").disabled = true;
            document.getElementById("doneBtn").setAttribute("style", "cursor:not-allowed;background-color:#ebebeb;color:#666666");   
        }
     }, [image]);

    return (
        <div id="imagePreviewButtonDiv">
            <div id="imagePreviewBtn">
                <button
                    id="backBtn"
                    onClick={() => {
                        dispatch(createPostTitleMount("Create a post"));
                        dispatch(imagePreviewImageUnMount());
                        if (document.getElementById("CreatePostPopbottom")) {
                            document.getElementById("CreatePostPopbottom").style.display = "flex";
                        }
                        dispatch(imagePreviewBottonDivUnmount());
                    }}>
                    Back</button>
                <button
                    id="doneBtn"
                    onClick={() => {
                        dispatch(createPostTitleMount("Create a post"));
                        dispatch(imagePreviewBottonDivUnmount());
                        if (document.getElementById("CreatePostPopbottom")) {
                            document.getElementById("CreatePostPopbottom").style.display = "flex";
                        }
                    }}>
                    Done</button>
            </div>
        </div>
    )
}
