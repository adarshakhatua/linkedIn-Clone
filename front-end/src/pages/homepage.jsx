import "../style/homepage.css";
import { FcGoogle } from "react-icons/fc";

const exploreTopics = ["See All Topics", "Remote", "Work from Home", "Retirement", "Internships", "Freelancer", "Salary and Compensation","Starting a job"]


export const HomePage = () => {

    return <div id="HomePage">

        <div id="welcomeDiv">
            <div id="welcomeDivContent">
                <h1>Welcome to your professional community</h1>
                <div class="field">
                    <input type="text" name="fullname" id="fullname" placeholder=" "/>
                        <label for="fullname">Email or phone number</label>
                </div>

                <div class="field">
                    <input type="email" name="email" id="email" placeholder=" " />
                        <label for="email">Password</label>
                </div>
                <button id="showBtn">Show</button>
                <p id="forgetPassword">Forgot password?</p>
                <button id="signInBtn">Sign in</button>
                <div id="horizontalLine"></div>
                <div id="or">or</div>
                <button id="googleSignInBtn"> <FcGoogle /> <p>Sign in with Google</p></button>
            </div>

            <div id="welcomeDivImage">
                <img src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg" alt="" />
            </div>
        </div>

        <div id="exploreDiv">
            <div id="exploreDivContent">

                <div id="exploreDivLeft">
                    <p>Explore topics you are interested in</p>
                </div>

                <div id="exploreDivRight">
                    <p>CONTENT TOPICS</p>
                    <div id="exploreDivRightContent">
                        {
                            exploreTopics.map((item) => {
                                return <div className="exploreDivRightContentSIngle">{item}</div>
                            })
                        }
                    </div>
                </div>
                
            </div>

        </div>

        <div id="findJobDiv"></div>

        <div id="postJobDiv"></div>

        <div id="rightPeopleDiv"></div>

        <div id="connectPeopleDiv"></div>

        <div id="videoDiv"></div>

        <div id="joinYourCollegeDiv"></div>
    </div>
}