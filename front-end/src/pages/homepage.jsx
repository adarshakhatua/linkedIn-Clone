import "../style/homepage.css";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { TabTitle } from "../utils/generalFunction";

const exploreTopics = ["See All Topics", "Remote", "Work from Home", "Retirement", "Internships", "Freelancer", "Salary and Compensation","Starting a job"]
const findjobless = ["Engineering", "Business Development", "Finance", "Administrative Assistant", "Retail Associate", "Customer Service", "Operations", "Information Technology", "Marketing", "Human Resources"]
const findjobmore = [" Healthcare Service", "Sales", "Program and Project Management", "Accounting", "Arts and Design", "Community and Social Services", "Consulting", "Education", "Entrepreneurship", "Legal", "Media and Communications", "Military and Protective Services", "Product Management", "Purchasing", " Quality Assurance", "Real Estate", "Research", "Support", "Administrative"];
const sliderData = [
    {   id:1,
        heading: "Let the right people know you’re open to work",
        details: "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
        Image:"https://static-exp2.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own",
    },
    {   id:2,
        heading: "Conversations today could lead to opportunity tomorrow",
        details: "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
        Image:"https://static-exp2.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5",
    },
    {   id:3,
        heading: "Stay up to date on your industry",
        details: "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
        Image: "https://static-exp2.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg",
    }
]
const option = [
    {
        name: "Training and Education",
        count:"290+ courses"
    },
    {
        name: "IT Help Desk", 
        count: "290+ courses"
    },
    {
        name: "Security",
        count: "560 + courses"
    },
    {
        name: "Business Software and Tools",
        count: "1, 900 + course"
    },
    {
        name: "Professional Development",
        count: "1, 300 + course"
    },
    {
        name: "Customer Service",
        count: " 170 + courses"
    },
    {
        name: "Small Business and Entrepreneurship",
        count: "320 + courses"
    },
    {
        name: " DevOps",
        count: " 220 + courses"
    },
    {
        name: " Human Resources",
        count: "420 + courses"
    },
    {
        name: " Sales",
        count: " 220 + courses"
    },
    {
        name: "Product and Manufacturing",
        count: "1, 400 + course"
    },
    {
        name: "Web Development",
        count: "1, 300 + course"
    },
    {
        name: "Database Management",
        count: "280 + courses"
    },
    {
        name: " Web Design",
        count: "520 + courses"
    },
    {
        name: "Business Analysis and Strategy", 
        count: "760+ courses"
    },
    {
    name: "User Experience",
        count: " 510 + courses"
    },
    {
    name: "Software Development",
        count: "1, 800 + course "
    },
    {
    name: "Network and System Administration",
        count: "1, 100 + course"
    },
    {
    name: "Data Science",
        count: "790 + courses"
    },
    {
    name: "Video",
        count: "590 + courses"
    },
    {
    name: "Photography",
        count: "1, 100 + course"
    },
    {
    name: "Motion Graphics and VFX",
        count: "890 + courses"
    },
    {
    name: "Graphic Design",
        count: "950 + courses"
    },
    {
        name: "AEC",
        count: "1, 400 + course"
    },
    {
        name: "Audio and Music",
        count: "400 + courses"
    },
    {
        name: "Animation and Illustration",              
        count: "1, 600 + course"
    },
    {
        name: "Visualization and Real - Time",
        count: "1, 200 + course"
    },
    {
        name: "Project Management",
        count: "370 + courses"
    },
    {
        name: "Cloud Computing",
        count: "820 + courses"
    },
    {
        name: "Marketing",
        count: "790 + courses"
    },
    {
        name: "Mobile Development",
        count: "460 + courses"
    },
    {
        name: "Leadership and Management",
        count: "1, 300 + course"
    },
    {
        name: "Finance and Accounting",
        count: "260 + courses"
    },
    {
        name: "Career Development",
        count: "450 + courses"
    },
                    
]


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
                        <img src="https://static-exp2.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv" alt="image" />
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
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                            
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








const Slider = () => {

    const [data] = useState(sliderData);
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [classPrev, setClassPrev] = useState("");
    const [classNext, setClassNext] = useState("");
    
    
    const handleIndex = (params) => {
        if (index <= 0 && params<0) {
            setIndex(0);
            setPrev(false);
        }
        else if (index >= data.length - 1 && params>0) {
            setIndex(data.length - 1);
            setNext(false);
        }
        else {
            setIndex(index + params);
            setPrev(true);
            setNext(true);
            setClassNext("");
            setClassPrev("");
        }
    }

   
    useEffect(() => {
        if (index === 0) { setPrev(false); setClassPrev("notAllowed"); }
        if (index === data.length - 1) { setNext(false); setClassNext("notAllowed")}
        
    }, [index]);


    useEffect(() => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = index * 1120;
    },[index])


    return <div id="rightPeopleDivContent">

        <div id="rightPeopleDivSliderBtn">
            <button onClick={() => { handleIndex(-1) }} disabled={!prev} className={classPrev}><IoIosArrowBack fontSize={"24px"} /><p>Previous</p></button>
            <button onClick={() => { handleIndex(1) }} disabled={!next} className={classNext}><p>Next</p><IoIosArrowForward fontSize={"24px"} /></button>
        </div>

        <div id="slider">
            {data.map((item) => {
                return <div className="rightPeopleDivSlider" id={item.id} key={item.id}>

                    <div id="rightPeopleDivSliderLeft">
                        <h1>{item.heading}</h1>
                        <p>{item.details}</p>
                    </div>

                    <div id="rightPeopleDivSliderRight">
                        <img src={item.Image} alt="" />
                    </div>

                </div>
            })}
        </div>
        

    </div>
}

