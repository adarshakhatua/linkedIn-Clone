import "../style/profile.page/profilepage.css";
import { MainProfile } from "../components/profile.page/main.profile";
import { HighLights } from "../components/profile.page/highlight.profile";
import { About } from "../components/profile.page/about.profile";
import { MessagingFeed } from "../components/feed.page/message.feed";
import { ExperienceProfile } from "../components/profile.page/experience.profile";
import { EducationProfile } from "../components/profile.page/education.profile";
import { LicenceAndCertificatesProfile } from "../components/profile.page/licencesAndCertificate.profile";
import { SkillsProfile } from "../components/profile.page/skills.profile";
import { RecommendationsProfile } from "../components/profile.page/recommendations.profile";
import { ProjectsProfile } from "../components/profile.page/projects.profile";
import { InterestProfile } from "../components/profile.page/interests.profile";
import { AdFeed } from "../components/feed.page/ad.feed";
import { AlsoViewed } from "../components/profile.page/alsoviewed.profile";
import { MayKnowProfile } from "../components/profile.page/mayKnow.profile";
import { FooterProfile } from "../components/profile.page/footer.profile";
import { useEffect, useState } from "react";



export const ProfilePage = () => {

    //positioning addfeed.....
    const [mayknow, setMayknow] = useState(document.getElementById("profileSideContent"));

    useEffect(() => { setMayknow(document.getElementById("profileSideContent")) }, []);
    
    const options = {
        root: null,
        rootMargin:"-355px 0px 0px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry.isIntersecting);
            if (entry.isIntersecting===false) {
                document.querySelector(".addfeedscnd").style = "position:fixed;top:75px";
                document.getElementById("profileSideContent").style = "padding-bottom:280px";
            }
            else {
                document.querySelector(".addfeedscnd").style = "position:static";  
                document.getElementById("profileSideContent").style = "padding-bottom:0px";
            }
        })   
    }, options)

    useEffect(() => { if (mayknow) { observer.observe(mayknow) } })


    return (
        <div id="profilePage">

            <div id="profileMainContent">
                <MainProfile />
                <HighLights />
                <About />
                <MessagingFeed />
                <ExperienceProfile />
                <EducationProfile />
                <LicenceAndCertificatesProfile />
                <SkillsProfile />
                <RecommendationsProfile />
                <ProjectsProfile />
                <InterestProfile />
            </div>

            <div id="profileSideContent">
                <AdFeed />
                <AlsoViewed/>
                <MayKnowProfile />
                <AdFeed clssNm={"addfeedscnd"}/>
            </div>

            <FooterProfile/>

        </div>
    )
}