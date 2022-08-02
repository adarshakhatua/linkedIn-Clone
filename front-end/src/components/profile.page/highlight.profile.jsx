import "../../style/profile.page/highlight.profile.css";
import { RiLock2Fill } from "react-icons/ri";

export const HighLights = () => {
    return (
        <div id="highlightsDiv">
            <h1 className="heading1"    >Highlights</h1>
            <div id="institutionDiv">

                <div id="institutionImgDiv">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQHdxMHntX6Z8Q/company-logo_100_100/0/1650372038245?e=1667433600&v=beta&t=NDjf5O0JpArq96no2-ruUqWVcpMxddJYcujt55l4cZk" alt="" />
                </div>

                <div id="institutionDetailsDiv">
                    <h1>You both studied at Masai </h1>
                    <p className="smallTxt1">You both studied at Masai from 2021 to 2022</p>
                    <button className="button2"><RiLock2Fill /> <span>Message</span> </button>
                </div>

            </div>
        </div>
    )
}