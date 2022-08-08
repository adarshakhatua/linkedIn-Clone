import "../../style/profile.page/alsoviewed.profile.css";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";


export const AlsoViewed = () => {
    return (
        <div id="alsoViewedDiv" className="componentDiv2">
            <h1 >People also viewed</h1>
            <ViewedSingle
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQG8FLifa8UtKA/profile-displayphoto-shrink_100_100/0/1608979825404?e=1665619200&v=beta&t=gBM13KWCwogNEHvIsJseJ2nOkleN4faLzKdIBDllYMs"}
                name={"Naman Kumar"} connection={"3rd"} description={"SDE | Full Stack Developer | MERN Stack"} />
            <ViewedSingle
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQG8FLifa8UtKA/profile-displayphoto-shrink_100_100/0/1608979825404?e=1665619200&v=beta&t=gBM13KWCwogNEHvIsJseJ2nOkleN4faLzKdIBDllYMs"}
                name={"Naman Kumar"} connection={"3rd"} description={"SDE | Full Stack Developer | MERN Stack"} />
            <ViewedSingle
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQG8FLifa8UtKA/profile-displayphoto-shrink_100_100/0/1608979825404?e=1665619200&v=beta&t=gBM13KWCwogNEHvIsJseJ2nOkleN4faLzKdIBDllYMs"}
                name={"Naman Kumar"} connection={"3rd"} description={"SDE | Full Stack Developer | MERN Stack"} />
            <button >Show More <IoIosArrowDown/></button>
        </div>
    )
}


const ViewedSingle = ({ image, name, connection, description }) => {
    return (
        <div id="viewedSingleDiv">

            <div id="viewedSingleImg">
                <img src={image} alt="" />
            </div>

            <div id="viewedSingleContent">
                <span className="heading2">{name} </span> <span className="smallTxt1 smallTxtColorFade">. {connection }</span>
                <h4 className="smallTxt1 smallTxtColorFade">{ description}</h4>
                <button className="button2"><GoPlus /> Follow</button>
            </div>

        </div>
    )
}