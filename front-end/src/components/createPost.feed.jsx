import {  useEffect } from "react";
import "../style/createPost.feed.css";
import { Photo, Video,Document,Job,Celebrate,Poll,More,Comment, Event, Article,Earth } from "./custom.icon";
import { ProfileImage } from "./profileImage";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io"
import { useSelector,useDispatch } from "react-redux";
import { createPostPopMount, createPostPopUnmount, createPostTitleMount, imagePreviewImageMount } from "../redux/component/action";


export const CreatePostFeed = () => {

    const modal = useSelector((store) => store.component.create_post_pop);
    console.log(modal)
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
        document.getElementById("outerLayout")?.addEventListener("click", (e) => { if (!e.target.closest("#CreatePostPopDiv")) { dispatch(createPostPopUnmount()); console.log(e.target.className) } })
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
    const dispatch = useDispatch();
    console.log(title)

    return (
        <div id="outerLayout">
            <div id="CreatePostPopDiv">

                <div id="CreatePostPopDivTop" >
                    {title}
                    <div id="closeBtn" onClick={() => { dispatch(createPostPopUnmount()) }}><GrClose /></div>
                </div>
                <Profile />
                {/* <BottomMedia/> */}
                {/* {(title === "Create a post" && (image !== null && image !== undefined)) ? <><Profile /></> : <></>}
                {(title === "Create a post" && image===null) ? <Profile/> : <><div id="imagePreview"><img src={image} alt="" /></div></>} */}
                {image === null ? <BottomMedia /> : <><div id="imagePreviewBtn"><button onClick={() => { dispatch(createPostTitleMount("Create a post")) }}>Done</button></div></>}
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
                <textarea name="" onKeyUp={handleCreatePostInputHeight} id="CreatePostPop_Input" cols="30" rows="10" placeholder="What do you want to talk" ></textarea>
            </div>
        </div>
    )
}


const BottomMedia = () => {

    
    const dispatch = useDispatch();


    const imagePreview = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        dispatch(imagePreviewImageMount(imageUrl));
    }

    return (
        <div id="CreatePostPopbottom">

            <div>
                <form action="" encType="multipart/form-data">
                    <input type="file" name="photo" id="photo" style={{ display: "none" }} onChange={imagePreview} />
                    <label htmlFor="photo" ><Photo /></label>
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
        </div>
    )
}