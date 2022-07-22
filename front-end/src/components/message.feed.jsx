import "../style/message.feed.css";
import { ProfileImage } from "./profileImage";
import { Create, Filter } from "./custom.icon";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";


export const MessagingFeed = () => {

    const [messageDrop, setMessageDrop] = useState(true);
    const handleMessageDrop = () => {
        setMessageDrop(!messageDrop);
    }

    return (
        <div id="messagingFeed">
            <div id="messagingFeedTop"
                onClick={(e) => { if (e.target.id !== "messageSetting" && e.target.id !== "createMessgae" && e.target.parentElement.id !== "messageSetting" && e.target.parentElement.id !== "createMessgae") { handleMessageDrop() }; console.log(e.target.parentElement.id) }}>

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
                    <p id="createMessgae"><Create /></p>
                    <p>{messageDrop ? <RiArrowDownSLine /> : <RiArrowUpSLine/>}</p>
                </div>

            </div>

            {messageDrop && <div id="messagingFeedBottom">

                <div id="searchMessageDiv">
                    <AiOutlineSearch style={{position:"relative",left:"20px"}}/>
                    <input type="text" placeholder="Search messages" />
                    <Filter/>
                </div>

                <div id="messagePersonDiv"></div>

            </div>}

        </div>
    )
}