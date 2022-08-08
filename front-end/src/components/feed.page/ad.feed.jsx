import "../../style/feed.page/ad.feed.css";
import { ProfileImage } from "../profileImage";
import { BiDotsHorizontalRounded } from "react-icons/bi"


export const AdFeed = () => {
    return (
        <div id="AdFeed" className="componentDiv2">
            <div id="AdOptions">Ad <BiDotsHorizontalRounded/></div>
            <div id="AdTitle">Think Data Centre, Think STT GDC India</div>
            <div id="AdLogo">
                <ProfileImage image={"https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw"} imageStyle={{position:"static",margin:"0px 14px"} } />
                <img src="https://media-exp1.licdn.com/dms/image/C510BAQGs0lOQBqCkwg/company-logo_100_100/0/1578553470995?e=1666224000&v=beta&t=lFxjeBE6k5f-9R_KLUdHCncMaX3oHOMr8-mq3Bk8Lek" alt="" />
            </div>
            <div id="AdDescription">India's Leading DC service provider -STT GDC India</div>
            <button id="followButton">Follow</button>

        </div>
    )
}
