import "../../style/profile.page/projects.profile.css";
import { RiShareBoxFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs"

export const ProjectsProfile = () => {
    return (
        <div id="projectsProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Projects</h1>
            <ProjectSingle />
            <ProjectSingle />
            <ProjectSingle />
            <button className="moreButton"> Show all { } Projects <BsArrowRight /></button>
        </div>
    )
}


const ProjectSingle = () => {

    return (
        <div id="projectSingleDiv">
            <h1 className="heading2">Clone of CoSchedule.com</h1>
            <h3 className="smallTxt1">Associated with Masai School</h3>
            <button className="button2">Show Project <RiShareBoxFill /></button>
            <p className="smallTxt1" id="projectDetailsTxt">A collaborative project built by a team of 3 in 5 days. Features: Contains landing page, hovering features in the navbar, sign-in/sign-up, add to cart, sorting, filtering, checkout page, payment page, etc.
                Areas of Responsibility: Team leader for the project. Premium account page, payment process, complete basic user flow.
                Tech Stack: HTML | CSS | JavaScript</p>
            <h3 className="smallTxt1 smallTxtWeight">Other creators</h3>
            <div id="otherCreaterImg">
                <div className="singleCreatorImg">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEqaPonAcNOow/profile-displayphoto-shrink_100_100/0/1649778131417?e=1665619200&v=beta&t=Ln3equ2W7nwuM5d6PsYv4we2dYmRqcNow9DRqijhVJY" alt="" />
                </div>
                <div className="singleCreatorImg">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEqaPonAcNOow/profile-displayphoto-shrink_100_100/0/1649778131417?e=1665619200&v=beta&t=Ln3equ2W7nwuM5d6PsYv4we2dYmRqcNow9DRqijhVJY" alt="" />
                </div>
                <div className="singleCreatorImg">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEqaPonAcNOow/profile-displayphoto-shrink_100_100/0/1649778131417?e=1665619200&v=beta&t=Ln3equ2W7nwuM5d6PsYv4we2dYmRqcNow9DRqijhVJY" alt="" />
                </div>
            </div>
        </div>
    )
}