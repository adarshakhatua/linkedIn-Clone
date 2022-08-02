import "../style/profile.page/profilepage.css";
import { MainProfile } from "../components/profile.page/main.profile";
import { HighLights } from "../components/profile.page/highlight.profile";
import { About } from "../components/profile.page/about.profile";




export const ProfilePage = () => {
    return (
        <div id="profilePage">
            <MainProfile />
            <HighLights />
            <About/>
        </div>
    )
}