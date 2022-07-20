import "../style/footer.css";
import footerlogo from "../files/footerlogo.svg";
import { LogoLInkedIn} from "../components/custom.icon";
import { IoIosArrowDown } from "react-icons/io";

const general = ["Sign Up", "Help Center", "About", "Press", "Blog", "Careers", "Developers"];
const BrowseLinkedI = ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"];
const BusinessSolutions = ["Talent", "Marketing", "Sales", "Learning"];
const Directories = ["Members", "Jobs", "Companies", "Featured", "Learning", "Posts", "Articles", "Schools", "News", "News Letters", "Services", "Products", "Content Topics"]
const copyRightDiv = [ "About", "Accessibility", "User Agreement", "Privacy Policy", "Cookie Policy", "Copyright Policy", "Brand Policy", "Guest Controls","Community Guidelines"]

export const Footer = () => {
    document.getElementById("copyrightDiv")

    return <footer>
        <div id="footerLogo">
            <div id="footerContent">
                <div id="footerLogoDiv">
                    {/* <img src={logo} alt="" /> */}
                    <p><LogoLInkedIn /></p>
                </div>
                <FooterContentSingle heading={"General"} data={general}></FooterContentSingle>
                <FooterContentSingle heading={"Browse LinkedIn"} data={BrowseLinkedI}></FooterContentSingle>
                <FooterContentSingle heading={"Business Solutions"} data={BusinessSolutions}></FooterContentSingle>
                <FooterContentSingle heading={"Directories"} data={Directories}></FooterContentSingle>
            </div>
        </div>

        <div id="copyrightDiv">
            <img src={footerlogo} alt="" />
            <div className="singleFoolterTxtFirst">© 2022</div>
            {copyRightDiv.map((item) => {
                return <div className="singleFoolterTxt">{ item}</div>
            })}
            <div className="singleFoolterTxtLast">language  <IoIosArrowDown /></div>
           
        </div>

    </footer>
}


const FooterContentSingle = ({ heading, data }) => {
    return <div id="FooterContentSingle">
        <h4>{heading}</h4>
        {data.map((item) => {
            return <p>{item}</p>
        })}
    </div>
}
