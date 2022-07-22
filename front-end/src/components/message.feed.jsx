import "../style/message.feed.css";
import { ProfileImage } from "./profileImage";
import { Create, Filter,Archive } from "./custom.icon";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi"
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react";
import { useEffect } from "react";


export const MessagingFeed = () => {
    const [classChange,setClassChange]=useState("dropup")
    const [messageDrop, setMessageDrop] = useState(true);
    const handleMessageDrop = () => {
        setMessageDrop(!messageDrop);
        messageDrop ? setClassChange("dropdown"):setClassChange("dropup")
    }

    return (
        <div id="messagingFeed" className={classChange}>
            <div id="messagingFeedTop"
                onClick={(e) => { if (e.target.id !== "messageSetting" && e.target.id !== "createMessage" && e.target.parentElement.id !== "messageSetting" && e.target.id !== "createMessageIcon") { handleMessageDrop() }; console.log(e.target.id) }}>

                <div id="messagingFeedTopLeft">
                    <ProfileImage
                        imageStyle={{ height: "32px" }}
                        style={{ height: "32px" }}
                        status={"online"}
                        onlineStyle={{left:"72%"}}
                        image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"} />
                    <p>Messaging</p>
                </div>

                <div id="messagingFeedTopRight">
                    <p id="messageSetting"><BsThreeDots /></p>
                    <p id="createMessage"><Create  style={{height:"16px", width:"16px"}}/></p>
                    <p>{messageDrop ? <RiArrowDownSLine /> : <RiArrowUpSLine/>}</p>
                </div>

            </div>

            {messageDrop && <div id="messagingFeedBottom">

                <div id="searchMessageDiv">
                    {/* <AiOutlineSearch style={{ position: "relative", left: "10px", top: "6px", fontSize: "24px", color:"rgba(0, 0, 0, 0.6)"}}/>
                    <input type="text" placeholder="Search messages" />
                    <Filter style={{ position: "relative", left: "-14px", top: "7px", height: "20px", width: "20px", color:"rgba(0, 0, 0, 0.6)",cursor:"pointer" }} /> */}

                    <div id="selectMessageActionDiv">
                        <div id="selectMessageActionDivLeft">
                            <div className="selectMessageActionDivIcon"><VscChromeClose /></div>
                            <div id="selectCount">1 Selected</div>
                        </div>

                        <div id="selectMessageActionDivRight">
                            <div className="selectMessageActionDivIcon"><HiOutlineMail/></div>
                            <div className="selectMessageActionDivIcon"><FaTrashAlt/></div>
                            <div className="selectMessageActionDivIcon"><Archive/></div>
                        </div>

                    </div>

                </div>

                <div id="messagePersonDiv">
                    <MessageSingle/>
                </div>

                <div id="initialSearchResult"><img src="https://static-exp1.licdn.com/sc/h/8ho1mw83gfmgiq4yr8f8wkjmh" alt="" /><p>Search your messages by recipient, content, or conversation name</p></div>

            </div>}

        </div>
    )
}

const MessageSingle = () => {

    const [check, setCheck] = useState(false);
    const [classChange, setClassChange] = useState("checkBox");
    const [showCheck, setShowCheck] = useState(false);

    const handleCheck = () => {
        if (check) { setClassChange("checkBox")}
        else { setClassChange("checkedBox"); }
        return setCheck(!check);
    }

    useEffect(() => {
        if (check) {
            setShowCheck(true)
        }
    },[check,showCheck])

    return (
        <div className="messageSingle">

            <div className="messageSingleImage" onMouseEnter={()=>{setShowCheck(true)}} onMouseLeave={()=>{setShowCheck(false)}}>
                {showCheck && <div className={classChange} onClick={handleCheck}>
                    {check && <VscCheck />}
                </div>}
                <img src="" alt="" />
            </div>

            <div className="messageSingleContent">
                <div className="messageSingleContent1">
                    <p>Deshapriya Khatua</p>
                    <p>7:24 PM</p>
                </div>
                <div className="messageSingleContent2">
                    <p>Deshapriya: Sure</p>
                    <p>1</p>
                </div>
            </div>

        </div>
    )
}


