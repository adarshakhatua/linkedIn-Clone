import "../../style/profile.page/education.profile.css";


export const EducationProfile = () => {
    return (
        <div id="educationProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Education</h1>
            <EducationSingleDiv
                image={"https://media-exp1.licdn.com/dms/image/C560BAQHdxMHntX6Z8Q/company-logo_100_100/0/1650372038245?e=1667433600&v=beta&t=NDjf5O0JpArq96no2-ruUqWVcpMxddJYcujt55l4cZk"}
                heading={"Masai"}
                course={"Full stack web development"}
                duration={"Nov 2021 - Jun 2022"} />
            <EducationSingleDiv
                image={"https://media-exp1.licdn.com/dms/image/C560BAQGLKWFIBprdTg/company-logo_100_100/0/1588544670420?e=1667433600&v=beta&t=Ky95gPzIkTGCYVdMmtQKKuJKQ638ZaaxCeF41SBtaP0"}
                heading={"Bipin Tripathi Kumaon Institute Of Technology"}
                course={"Bachelor of Technology - BTech, Mechanical Engineering"}
                duration={"Aug 2017 - Nov 2020"} />
            <EducationSingleDiv
                
                heading={"Government Polytechnic Kashipur"}
                course={"Diploma in mechanical engineering , Mechanical Engineering"}
                duration={"Aug 2014 - Jul 2017"} />
            
        </div>
    )
}


const EducationSingleDiv = ({image,heading,course,duration}) => {

    return (
        <div id="educationSingleDiv">

            <div id="instituseImageDiv" className="instituteImage">
                {image && <img src={image} alt="" />}
            </div>

            <div id="educationDetailsDiv">
                <h1 className="heading2">{heading}</h1>
                <h4 className="smallTxt1">{course }</h4>
                <p className="smallTxt1 smallTxtColorFade">{ duration}</p>
            </div>

        </div>
    )
}