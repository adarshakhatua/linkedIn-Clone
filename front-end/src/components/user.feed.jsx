import "../style/user.feed.css"
import { Premium } from "../components/custom.icon";
import { ImBookmark } from "react-icons/im";

export const UserFeed = () => {
    return (
        <div id="userFeed">
            <div id="userDetails">
                <div id="coverImage">
                    <img src="https://media-exp2.licdn.com/dms/image/C4D16AQGYf1HlDxsATQ/profile-displaybackgroundimage-shrink_200_800/0/1649082421104?e=1663804800&v=beta&t=FgBiF5gt7En83XkXTEZWoup7YIDky-xUdwKQDlYDHZU" alt="" />
                </div>
                <div id="profileImageDiv">
                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw" alt="" />
                </div>
                <div id="userDetailsTxt">
                    <h3>Adarsha Khatua</h3>
                    <p>Aspiring Full Stack Web Developer, Learning MERN Stack at Masai School,Bengaluru,Karnataka</p>
                </div>
            </div>

            <div id="connections">
                <div id="connections1">
                    <p>Connections</p>
                    <p>6</p>
                </div>

                <div id="connections2">
                    <p>Connect with alumni</p>
                </div>

            </div>
            <div id="tryPremium">
                <p>Access exclusive tools & insights</p>
                <h3> <Premium /> Try Premium for free</h3>
            </div>
            <div id="myItems">
                <p><ImBookmark fontSize={"14px"} /> My items</p>
            </div>
        </div>
    )
}