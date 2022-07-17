import "../style/footer.css";
import logo from "../files/navLogo.svg";
const general = ["Sign Up", "Help Center", "About", "Press", "Blog", "Careers", "Developers"];
const BrowseLinkedI = ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"];
const BusinessSolutions = ["Talent", "Marketing", "Sales", "Learning"];
const Directories = ["Members", "Jobs", "Companies", "Featured", "Learning", "Posts", "Articles", "Schools", "News", "News Letters", "Services", "Products", "Content Topics"]

export const Footer = () => {


    return <footer>
        <div id="footerLogo">
            <div id="footerContent">
                <div id="footerLogoDiv">
                    <img src={logo} alt="" />
                </div>
                <FooterContentSingle heading={"General"} data={general}></FooterContentSingle>
                <FooterContentSingle heading={"Browse LinkedIn"} data={BrowseLinkedI}></FooterContentSingle>
                <FooterContentSingle heading={"Business Solutions"} data={BusinessSolutions}></FooterContentSingle>
                <FooterContentSingle heading={"Directories"} data={Directories}></FooterContentSingle>
            </div>
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
