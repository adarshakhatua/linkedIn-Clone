import "../../style/profile.page/licencesAndCertificate.profile.css";
import { RiShareBoxFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs"


export const LicenceAndCertificatesProfile = () => {
    return (
        <div id="licenceAndCertificatedDiv" className="ComponentDiv">
            <h1 className="heading1">Licenses & certifications</h1>

            <LicenceAndCertificatesSingle
                image={"https://media-exp1.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_100_100/0/1641202397642?e=1667433600&v=beta&t=HnHoqziKUZj-dVPj3ra8KQhqRZos_JoJT3bXZBhPdFg" }
                name={"Problem Solving (Intermediate)" }
                certifier={"HackerRank" }
                duration={ " Mar 2022 · No Expiration Date"}
                credentialId={"15ac4c2982da"} />
            
            <LicenceAndCertificatesSingle
                image={"https://media-exp1.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_100_100/0/1641202397642?e=1667433600&v=beta&t=HnHoqziKUZj-dVPj3ra8KQhqRZos_JoJT3bXZBhPdFg"}
                name={"Problem Solving (Intermediate)"}
                certifier={"HackerRank"}
                duration={" Mar 2022 · No Expiration Date"}
                credentialId={"15ac4c2982da"} />
            
            <LicenceAndCertificatesSingle
                image={"https://media-exp1.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_100_100/0/1641202397642?e=1667433600&v=beta&t=HnHoqziKUZj-dVPj3ra8KQhqRZos_JoJT3bXZBhPdFg"}
                name={"Problem Solving (Intermediate)"}
                certifier={"HackerRank"}
                duration={" Mar 2022 · No Expiration Date"}
                credentialId={"15ac4c2982da"} />
            
            <button id="showCredential" className="moreButton">Show all { } licenses & certifications <BsArrowRight/></button>

        </div>
    )
}

const LicenceAndCertificatesSingle = ({ image, name, certifier, duration, credentialId }) => {
    return (
        <div id="licenceAndCertificateSingle">

            <div id="licenceAndCertificateImage" className="instituteImage">
                <img src={image} alt="" />
            </div>

            <div id="licenceAndCertificateDetails">
                <h1 className="heading2">{name}</h1>
                <h4 className="smallTxt1">{ certifier}</h4>
                <h4 className="smallTxt1 smallTxtColorFade">Issued { duration}</h4>
                <h4 className="smallTxt1 smallTxtColorFade">Credential ID {credentialId}</h4>
                <button className="button2">Show credential <span><RiShareBoxFill /></span></button>
            </div>

        </div>
    )
}