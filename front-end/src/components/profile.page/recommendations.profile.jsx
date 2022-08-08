import { useEffect, useState } from "react";
import "../../style/profile.page/recommendations.profile.css";
import { BsArrowRight } from "react-icons/bs"



export const RecommendationsProfile = () => {

    return (
        <div id="reommendationProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Recommendations</h1>
            <VerticalOptions options={["Received", "Given"]} />

            <div id="recommendationDiv">
                <RecommendationSingle/>
                <RecommendationSingle/>
            </div>

            <button className="moreButton"> Show all { } licenses & certifications <BsArrowRight/></button>
        </div>
    )
}


//options will have to be an array
export const VerticalOptions = ({ options }) => {

    const[option,setOption]=useState(options[0])
    const handleOption = (e) => {
        setOption(e.target.textContent);
    }
    return (
        <div className="verticalOptions">
            {
                options?.map((item) =>
                    <VerticalOptionSingle item={item} option={option} key={item} handleOption={handleOption } />
                )
            }
        </div>
    )
}


const VerticalOptionSingle = ({ item, option,handleOption }) => {
    
    const [clss, setClss] = useState("verticalOptionsSingle");
    useEffect(() => {      
        if (option === item) { setClss("verticalOptionsSingle selectedDiv") }
        else { setClss("verticalOptionsSingle") }      
    }, [option])
    
    return (
        <div
            onClick={handleOption}
            className={clss}>
            {item}
        </div>
    )
}

const RecommendationSingle = () => {

    return (
        <div id="recommendationSingleDiv">

            <div id="recommendationSingleImg">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEqaPonAcNOow/profile-displayphoto-shrink_100_100/0/1649778131417?e=1665619200&v=beta&t=Ln3equ2W7nwuM5d6PsYv4we2dYmRqcNow9DRqijhVJY" alt="" />
            </div>

            <div id="recommendationSingleContent">
                <span className="heading2">Soumya Ranjan Kalia </span><span className="smallTxt1 smallTxtColorFade">. 2nd</span>
                <p className="smallTxt1">Aspiring Full Stack Web Developer | Learning MERN Stack at Masai School, Bengaluru, Karnataka</p>
                <p className="smallTxt1 smallTxtColorFade">July 9, 2022, Soumya Ranjan worked with Pankaj on the same team</p>
                <h4 className="smallTxt1" id="recommendedWords">Pankaj was a delight to work with and is not only a talented, insightful, and outstanding colleague,
                    but also an incredibly talented strategist. I like this person very much. Excellent problem-solver
                    with excellent communication skills. Any company would be fortunate to have Pankaj on board.</h4>
            </div>
        </div>
    )
}