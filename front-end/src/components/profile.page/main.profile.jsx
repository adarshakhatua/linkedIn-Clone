import "../../style/profile.page/main.profile.css";
import { GoPlus } from "react-icons/go";
import { RiLock2Fill } from "react-icons/ri";


export const MainProfile = () => {
    return (
        <div id="mainProfile">
            <div id="coverImageDiv">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQGxwHmeOpLyvQ/profile-displaybackgroundimage-shrink_200_800/0/1646134585042?e=1665014400&v=beta&t=mEKvJEEfAi9WmT8jwSyQMzBVVHS5OTazShmMfRV4mkE" alt="" />
            </div>

            <div id="profileImageDiv">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGaY9kNIYhLYA/profile-displayphoto-shrink_200_200/0/1657966610468?e=1665014400&v=beta&t=H-ECAYgL5hh8KIPx9wJlW7xMkbLtl7NdDf7jUOY0BKU" alt="" />
            </div>

            <div id="userDetailsDiv">

                <div id="persolanDetails">
                    <h1>Pankaj Kandpal  <span>.3rd</span></h1>
                    <h4>SDE 1 at source.one</h4>
                    <h5>Pithoragarh, Uttarakhand, India . <span>Contact info</span></h5>
                    <p><span>224 </span> followers . <span>178</span> connections</p>
                </div>

                <div id="OrganizationDetails">
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQHUtssOQaQotQ/company-logo_100_100/0/1542434251414?e=1667433600&v=beta&t=qZf7yEw6sigAG6t6VFG_mwmkBOnzgsJ0VGryOfwig80" alt="" />
                        Source.one</div>
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQHdxMHntX6Z8Q/company-logo_100_100/0/1650372038245?e=1667433600&v=beta&t=NDjf5O0JpArq96no2-ruUqWVcpMxddJYcujt55l4cZk" alt="" />
                        Masai School</div>
                </div>

            </div>

            <div id="followBtnDiv">
                <button className="button1 button2"><GoPlus /> <span>Follow</span></button>
                <button className="button2"><RiLock2Fill /> <span>Message</span></button>
                <button className="button2">More</button>
            </div>

        </div>
    )
}