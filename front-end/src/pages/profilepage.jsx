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



export const ProfilePage = () => {
    return (
        <div id="profilePage">
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
            <InterestProfile/>
        </div>
    )
}