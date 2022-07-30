import "../style/homepage.css";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowUp, IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { TabTitle } from "../utils/generalFunction";
import { Slider } from "../components/slider";
import { findjobless,findjobmore,exploreTopics,option} from "../utils/data";


export const HomePage = () => {
    TabTitle("LinkedIn: Log In or Sign Up")
    const [job, setJob] = useState(findjobless);
    const [jobBtn, setJobBtn] = useState(false);
    const [optioon, setOptioon] = useState(false);


    const handleJob = () => {
        if (!jobBtn) { setJob([...findjobless, ...findjobmore]) }
        else { setJob(findjobless) };
        setJobBtn(!jobBtn);   
    }

    const handleOptioon = () => {
        setOptioon(!optioon);
    }

    return <div id="HomePage">

        <div id="welcomeDiv">
            <div id="welcomeDivContent">
                <h1>Welcome to your professional community</h1>
                <div className="field">
                    <input type="text" name="fullname" id="fullname" placeholder=" "/>
                        <label htmlFor="fullname">Email or phone number</label>
                </div>

                <div className="field">
                    <input type="email" name="email" id="email" placeholder=" " />
                        <label htmlFor="email">Password</label>
                </div>
                <button id="showBtn">Show</button>
                <p id="forgetPassword">Forgot password?</p>
                <button id="signInBtn">Sign in</button>
                <div id="horizontalLine"></div>
                <div id="or">or</div>
                <button id="googleSignInBtn"> <FcGoogle /> <p>Sign in with Google</p></button>
            </div>

            <div id="welcomeDivImage">
                {/* <img src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg" alt="" /> */}
                <img src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
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
                                return <div className="exploreDivRightContentSIngle" key={item}>{item}</div>
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
                                return <div className="findJobDivRightContentSIngle" key={item}>{item}</div>
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

        <div id="rightPeopleDiv">
            <Slider></Slider>
            
        </div>

        <div id="connectPeopleDiv">
            <div id="connectPeopleDivContent">

                <div className="connectPeopleDivContentSigle">
                    <div className="imgDiv">
                        <img src="https://static-exp2.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj" alt="" />
                    </div>
                    <h3>Connect with people who can help</h3>
                    <button>Find people you know</button>
                </div>

                <div className="connectPeopleDivContentSigle">
                    <div className="imgDiv">
                        <img src="https://static-exp2.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv" alt="skill" />
                    </div>
                    <h3>Learn the skills you need to succeed</h3>

                    <div name="choose topic" id="chooseTopic" onClick={handleOptioon}>
                        <h3 value="" className="optionDropdown">Choose a topic to learn about <IoMdArrowDropdown fontSize={"30px"} color={ "##4a4a4a"} /></h3>
                    </div>
                    {optioon &&<div id="optionDiv">
                        {option.map((item) => { return <div className="optionDropdown"><h4>{item.name}</h4><p>{item.count}</p></div> })}
                    </div>}
                </div>

            </div>
        </div>

        <div id="videoDiv">
            <div id="VideoDivContent">
                <div id="backGround"></div>
                <div id="video">
                    <div id="player">
                        <iframe
                            width="500px"
                            height="378px"
                            src="https://www.youtube.com/embed/IlYUUN8rL_Y"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                            
                        </iframe>
                    </div>

                    <div id="Text"><h3>In it to chase my dream</h3></div>
                </div>
                <div id="nothing"></div>
            </div>
        </div>

        <div id="joinYourCollegeDiv">

            <div id="joinYourCollegeDivContent">
                <h1>Join your colleagues, classmates, and friends on LinkedIn.</h1>
                <button>Get started</button>
            </div>

        </div>
    </div>
}










