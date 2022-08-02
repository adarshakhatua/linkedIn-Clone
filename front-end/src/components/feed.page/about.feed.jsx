 import "../../style/feed.page/about.feed.css";
import { LogoLInkedIn } from "../custom.icon";
import { IoIosArrowDown } from "react-icons/io";

export const AboutFeed = () => {
    return (
        <div id="aboutFeed">

            <div id="aboutFeed1">
                <p>About</p>
                <p>Accessibility</p>
                <p>Help Center</p>
                <p>Privacy & Terms <IoIosArrowDown/></p>
                <p>Ad Choices</p>
                <p>Advertising</p>
                <p>Business Services <IoIosArrowDown/></p>
                <p>Get the LinkedIn app</p>
                <p>More</p>
            </div>

            <div id="aboutFeed2">
                <p><LogoLInkedIn /></p>
                <p>LinkedIn Corporation © 2022</p>
            </div>

        </div>
    )
}