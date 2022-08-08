import "../../style/profile.page/skills.profile.css";
import { Network } from "../custom.icon";
import { BsArrowRight } from "react-icons/bs"

export const SkillsProfile = () => {
    return (
        <div id="skillsProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Skills</h1>
            <SingleSkill skill={"JavaScript"} endorsement={3} />
            <SingleSkill skill={"Problem Solveing"} endorsement={3} />
            <SingleSkill skill={"LeaderShip"} endorsement={3} />
            <button id="showCredential" className="moreButton">Show all { } skills <BsArrowRight /></button>
        </div>
    )
}


const SingleSkill = ({skill,endorsement}) => {
    return (
        <div id="sigleSkill">
            <h1 className="heading2" id="skillNameTxt">{skill}</h1>
            <div id="sigleSkillEndorsementDiv">
                <Network />
                <p
                    className="smallTxt1"
                    id="skillTxtSmall">
                    {endorsement}{endorsement > 1 ? " endorsements" : " endorsement"}
                </p>
            </div>
        </div>
    )
}