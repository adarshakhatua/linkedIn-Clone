import "../../style/feed.page/discover.feed.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";



export const DiscoverFeed = () => {
    const [blink, setBlink] = useState("");
    return (
        <div id="discoverFeed" >
            <div id="discoverFeed1">
                <p>Groups</p>
                <div id="Events">
                    <p>Events</p>
                    <div id="addIcon"><AiOutlinePlus/></div>
                </div>
                <p>Followed Hashtags</p>
            </div>
            <div id="discoverFeed2" className={blink} onMouseEnter={() => { setBlink("blink"); setTimeout(() => { setBlink("") }, 100) }} onMouseLeave={() => { setBlink("blink"); setTimeout(() => { setBlink("") }, 100) }}>
                <p>Discover more</p>
            </div>
        </div>
    )
}