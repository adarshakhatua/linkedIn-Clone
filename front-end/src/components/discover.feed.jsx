import "../style/discover.feed.css";
import { AiOutlinePlus } from "react-icons/ai";



export const DiscoverFeed = () => {
    return (
        <div id="discoverFeed">
            <div id="discoverFeed1">
                <p>Groups</p>
                <div id="Events">
                    <p>Events</p>
                    <div id="addIcon"><AiOutlinePlus/></div>
                </div>
                <p>Followed Hashtags</p>
            </div>
            <div id="discoverFeed2" >
                <p>Discover more</p>
            </div>
        </div>
    )
}