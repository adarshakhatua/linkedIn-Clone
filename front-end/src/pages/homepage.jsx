import "../style/homepage.css";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const exploreTopics = ["See All Topics", "Remote", "Work from Home", "Retirement", "Internships", "Freelancer", "Salary and Compensation","Starting a job"]
const findjobless = ["Engineering", "Business Development", "Finance", "Administrative Assistant", "Retail Associate", "Customer Service", "Operations", "Information Technology", "Marketing", "Human Resources"]
const findjobmore = [" Healthcare Service", "Sales", "Program and Project Management", "Accounting", "Arts and Design", "Community and Social Services", "Consulting", "Education", "Entrepreneurship", "Legal", "Media and Communications", "Military and Protective Services", "Product Management", "Purchasing", " Quality Assurance", "Real Estate", "Research", "Support","Administrative"]
export const HomePage = () => {
    const [job, setJob] = useState(findjobless);
    const [jobBtn, setJobBtn] = useState(false);

    const handleJob = () => {
        if (!jobBtn) { setJob([...findjobless, ...findjobmore]) }
        else { setJob(findjobless) };
        setJobBtn(!jobBtn);   
    }

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

                <div className="exploreDivLeft">
                    <p>Explore topics you are interested in</p>
                </div>

                <div className="exploreDivRight">
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

        <div id="findJobDiv">
            <div id="findJobDivContent">

                <div className="exploreDivLeft">
                    <p>Find the right job or internship for you</p>
                </div>

                <div className="exploreDivRight">
                    <p>SUGGESTED SEARCHES</p>
                    <div id="findJobDivRightContent">
                        {
                            job.map((item) => {
                                return <div className="findJobDivRightContentSIngle">{item}</div>
                            })
                        }
                    </div>
                    <button id="showMore" onClick={handleJob}><p>{!jobBtn ? "Show more" : "Show less"}</p>{!jobBtn ? <IoIosArrowDown/> : <IoIosArrowUp/>}</button>
                </div>

            </div>
        </div>

        <div id="postJobDiv">
            <div id="postJobDivContent">

                <div className="postJobDivLeft">
                    <p>Post your job for millions of people to see</p>
                </div>
                <div className="exploreDivRight">
                        <div className="exploreDivRightContentSIngle" id="postAjob">Post a job</div>
                </div>

            </div>
        </div>

        <div id="rightPeopleDiv"></div>

        <div id="connectPeopleDiv"></div>

        <div id="videoDiv"></div>

        <div id="joinYourCollegeDiv"></div>
    </div>
}