import "../style/navbar.css";
import logo from "../files/navLogo.svg";
import discover from "../files/discover.svg";
import people from "../files/people.svg";
import learning from "../files/learning.svg";
import jobs from "../files/jobs.svg";


export const Navbar = () => {

    return <nav id="Navbar">

        <div id="logo">
            <img src={logo} alt="logo" id="logoImg"/>
        </div>

        <div id="navContentDiv">

            <div id="navGeneral">
              <NavGeneralSingle img={discover} title={"Discover"}></NavGeneralSingle>
                <NavGeneralSingle img={people} title={"People"}></NavGeneralSingle>
                <NavGeneralSingle img={learning} title={"Learning"}></NavGeneralSingle>
                <NavGeneralSingle img={jobs} title={"Jobs"}></NavGeneralSingle>
            </div>
            <div id="seperator"></div>
            <div id="joinDiv">
                <button>Join now</button>
                <button>Sign in</button>
            </div>
        </div>

    </nav>
}


const NavGeneralSingle = ({img,title}) => {

    return <div id="NavGeneralSingle">
        <div id="NavGeneralSingleImg">
            <img id="svgImg" src={img} alt="image" />
        </div>
        <div id="NavGeneralSingleTitle">{title}</div>
    </div>
}