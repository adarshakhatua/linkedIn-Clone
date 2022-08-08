import "../../style/profile.page/interests.profile.css";
import { VerticalOptions } from "./recommendations.profile";
import { BsArrowRight } from "react-icons/bs"



export const InterestProfile = () => {
    return (
        <div id="interestProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Interests</h1>
            <VerticalOptions options={["Influencers", "Companies", "Schools"]} />

            <div id="interestContentDiv">
                <InterestSingle/>
            </div>

            <button className="moreButton"> Show all { } Influencer <BsArrowRight /></button>
        </div>
    )
}


const InterestSingle = () => {
    return (
        <div id="interestSingleDiv">

            <div id="interestSingleImg">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0/1579726624860?e=1665619200&v=beta&t=iiyiiT-7jMVnUULxUVK18wdYDCQqztw6odcnqTVox4E" alt="" />
            </div>

            <div id="interestSingleDetails">
                <h1 className="heading2">Satya Nadella</h1>
                <h4 className="smallTxt1">Chairman and CEO at Microsoft</h4>
                <h5 className="smallTxt1 smallTxtColorFade">9,996,949 followers</h5>
            </div>

        </div>
    )
}