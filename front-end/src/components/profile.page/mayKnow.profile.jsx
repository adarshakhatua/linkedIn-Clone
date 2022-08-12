import "../../style/profile.page/mayKnow.profile.css";
import { ViewedSingle } from "./alsoviewed.profile";
import { ShowMOreButton } from "./alsoviewed.profile";


export const MayKnowProfile = () => {
    return (
        <div id="mayKnowProfileDiv" className="componentDiv2">

            <h1 className="smallHeading">People you may know</h1>

            <ViewedSingle image={"https://media-exp1.licdn.com/dms/image/C4D03AQF6AMdbMnhZPg/profile-displayphoto-shrink_100_100/0/1656769052592?e=1665619200&v=beta&t=S1TMXoD0SlxoSJiwsCGe73EjNyKSgtygH7fN6dMSeS0"}
                name={"Arpit Gupta"}
                description={"ASE at TCS || Java Dev || Py Dev || Tech Enthusiast"}
                buttonTxt={"Connect"} />
            
            <ViewedSingle image={"https://media-exp1.licdn.com/dms/image/C4D03AQF6AMdbMnhZPg/profile-displayphoto-shrink_100_100/0/1656769052592?e=1665619200&v=beta&t=S1TMXoD0SlxoSJiwsCGe73EjNyKSgtygH7fN6dMSeS0"}
                name={"Arpit Gupta"}
                description={"ASE at TCS || Java Dev || Py Dev || Tech Enthusiast"}
                buttonTxt={"Connect"} />
            
            <ViewedSingle image={"https://media-exp1.licdn.com/dms/image/C4D03AQF6AMdbMnhZPg/profile-displayphoto-shrink_100_100/0/1656769052592?e=1665619200&v=beta&t=S1TMXoD0SlxoSJiwsCGe73EjNyKSgtygH7fN6dMSeS0"}
                name={"Arpit Gupta"}
                description={"ASE at TCS || Java Dev || Py Dev || Tech Enthusiast"}
                buttonTxt={"Connect"} />
            
            <ViewedSingle image={"https://media-exp1.licdn.com/dms/image/C4D03AQF6AMdbMnhZPg/profile-displayphoto-shrink_100_100/0/1656769052592?e=1665619200&v=beta&t=S1TMXoD0SlxoSJiwsCGe73EjNyKSgtygH7fN6dMSeS0"}
                name={"Arpit Gupta"}
                description={"ASE at TCS || Java Dev || Py Dev || Tech Enthusiast"}
                buttonTxt={"Connect"} />
            
            <ShowMOreButton/>

        </div>
    )
}