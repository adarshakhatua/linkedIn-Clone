import "../../style/profile.page/experience.profile.css";


export const ExperienceProfile = () => {
    return (
        <div id="experienceProfileDiv" className="ComponentDiv">
            <h1 className="heading1">Experience</h1>
            <ExperiencSingle
                image={"https://media-exp1.licdn.com/dms/image/C510BAQHUtssOQaQotQ/company-logo_100_100/0/1542434251414?e=1667433600&v=beta&t=qZf7yEw6sigAG6t6VFG_mwmkBOnzgsJ0VGryOfwig80"}
                designation={"SDE I"}
                company_and_shift={"Source.one · Full-time"}
                duration={"Jul 2022 - Present · 2 mos"}
                location={"Pune, Maharashtra, India" } />

        </div>
    )
}


const ExperiencSingle = ({image,designation,company_and_shift,duration,location}) => {
    return (
        <div id="singleExperienceDiv">

            <div id="companyImage" className="instituteImage">
                <img src={image} alt="" />
            </div>

            <div id="experienceDetails">
                <h1 className="heading2" >{ designation}</h1>
                <h4 className="smallTxt1">{company_and_shift}</h4>
                <p className="smallTxt1">{duration}</p>
                <p className="smallTxt1"> {location}</p>
            </div>
        </div> 
    )
}