import "../style/loading.screen.css";
import { LogoLInkedIn } from "./custom.icon";


export const LoadingScreen = () => {
    return (
        <div id="LoadingScreen">
            <div id="logoDiv"><LogoLInkedIn /></div>
            <div id="loadingBar">
                <div id="blueBar"></div>
            </div>
        </div>
    )
}