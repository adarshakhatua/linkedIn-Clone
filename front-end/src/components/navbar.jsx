import "../style/navbar.css";
import { Job,Learning,Network,Discover,LogoLInkedIn} from "../components/custom.icon";


export const Navbar = () => {

    return <nav id="Navbar">

        <div id="logo">
            <div id="logoImg">{<LogoLInkedIn/> }</div>
        </div>

        <div id="navContentDiv">

            <div id="navGeneral">
              <NavGeneralSingle icon={<Discover/>} title={"Discover"}></NavGeneralSingle>
                <NavGeneralSingle icon={<Network/>} title={"People"}></NavGeneralSingle>
                <NavGeneralSingle icon={<Learning/>} title={"Learning"}></NavGeneralSingle>
                <NavGeneralSingle icon={<Job/>} title={"Jobs"}></NavGeneralSingle>
            </div>
            <div id="seperator"></div>
            <div id="joinDiv">
                <button>Join now</button>
                <button>Sign in</button>
            </div>
        </div>

    </nav>
}


const NavGeneralSingle = ({icon,title}) => {

    return <div id="NavGeneralSingle">
        <div id="NavGeneralSingleImg">
            <p>{icon}</p>
        </div>
        <div id="NavGeneralSingleTitle">{title}</div>
    </div>
}