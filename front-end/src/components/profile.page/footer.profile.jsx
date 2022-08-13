import "../../style/profile.page/footer.profile.css";
import { LogoLInkedIn } from "../custom.icon";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

export const FooterProfile = () => {

    let footertext = [
        { text: "About" },
        { text: "Accessibility" },
        { text: "Talent Solutions" },
        { text: "Community Guidelines" },
        { text: "Careers" },
        { text: "Marketing Solutions" },
        { text: "Privacy & Terms", logo: <IoIosArrowDown /> },
        { text: "Ad Choices" },
        { text: "Advertising" },
        { text: "Sales Solutions", },
        { text: "Mobile" },
        { text: "Small Business" },
        { text: "Safety Center" },     
    ]
    const year = new Date();
    return (
        <div id="footerProfileDiv">

            <div id="footerLogo">
                <LogoLInkedIn />
            </div>

            <div id="footer_Profile_Content">

                <div id="footerContentLeft">
                    {footertext.map((item) =>
                        <FooterContentLeftSingle text={item.text} logo={item.logo} />
                    )}
                </div>

                <div id="footerContentRight">
                    <FooterContentRightSingle
                        title={"Questions?"}
                        desc={"Visit our Help Center."}
                        logo={<BsFillQuestionCircleFill />} />
                    
                    <FooterContentRightSingle
                        title={"Manage your account and privacy?"}
                        desc={"Go to your Settings."}
                        logo={<IoMdSettings />} />
                </div>

            </div>

            <p
                id="footerCopyright"
                className="smallTxt1 smallTxtColorFade">
                LinkedIn Corporation &copy {year.getFullYear()}
            </p>

        </div>
    )
}


const FooterContentLeftSingle = ({text,logo}) => {
    return (
        <div id="footerContentLeftSingle" className="smallTxt1">{text} { logo}</div>
    )
}

const FooterContentRightSingle = ({ title,desc, logo }) => {
    return (
        <div id="footerContentRightSingle" className="smallTxt1">
            <h1>
                <span>{logo }</span>
                <span>{title}</span>
            </h1>
            <p>{desc}</p>
        </div>
    )
}