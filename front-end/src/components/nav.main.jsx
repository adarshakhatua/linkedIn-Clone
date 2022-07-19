import "../style/nav.main.css";
import logo from "../files/icon.ico";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Home,Job,Network,Messsage,Work,Notification,Avatar } from "./custom.icon";





export const NavMain = () => {
    return (
        <div id="mainNav">
            <div id="mainDivContent">
                <div id="logoDiv">
                    <img src={logo} alt="" />
                </div>

                <div id="searchDiv">
                    <AiOutlineSearch/>
                    <input type="search" name="search" id="search" placeholder="Search"/>
                </div>

                <div id="menuDiv">
                    <MenuItem icon={<Home/>} text={"Home"}></MenuItem>
                    <MenuItem icon={<Network/>} text={"My Network"}></MenuItem>
                    <MenuItem icon={<Job/>} text={"Jobs"}></MenuItem>
                    <MenuItem icon={<Messsage/>} text={"Messaging"}></MenuItem>
                    <MenuItem icon={<Notification />} text={"Notifications"}></MenuItem>
                    <MenuItem icon={<Avatar img={ "https://media-exp2.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_200_200/0/1649706029434?e=1663804800&v=beta&t=pixqWYvfmVG9h0q3XAmlipGyAduUbkG87Ih0nwu0g9U"} />} text={"Me"} icon2={< MdOutlineArrowDropDown fontSize={"20px"} />}></MenuItem>
                    <MenuItem icon={<Work />} text={"Work"} icon2={< MdOutlineArrowDropDown fontSize={"20px"}/>}></MenuItem>
                </div>
                <p id="premium">Try Premium for free</p>

                <div id="workDiv"></div>
            </div>
        </div>
    )
}



const MenuItem = ({icon,text,icon2}) => {
    return (
        <div className="menuItem">
            <p>{icon}</p>
            <p>{text}{ icon2}</p>
        </div>
    )
}