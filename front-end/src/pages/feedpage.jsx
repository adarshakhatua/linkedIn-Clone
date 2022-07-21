import "../style/feedpage.css";
import { TabTitle } from "../utils/generalFunction";
import { UserFeed } from "../components/user.feed";
import { DiscoverFeed } from "../components/discover.feed";


export const FeedPage = () => {

    TabTitle("Feed | LinkedIn");

    return (
        <div id="FeedPage">
            <div id="leftUserFeed">
                <UserFeed />
                <DiscoverFeed/>
            </div>

            <div id="mainUserFeed">
                <createPostFeed />
                <Contentfeed/>
            </div>

            <div id="rightUserFeed">
                <NewsFeed />
                <AdFeed/>
            </div>

            <div id="messageFeed">
                <MessagingFeed/>
            </div>

        </div>
    )
}






const NewsFeed = () => {
    return (
        <div id="newsFeed">

        </div>
    )
}

const AdFeed = () => {
    return (
        <div id="AdFeed">

        </div>
    )
}

const CreatePostFeed = () => {
    return (
        <div id="createPostFeed">

        </div>
    )
}

const Contentfeed = () => {
    return (
        <div id="contentFeed">

        </div>
    )
}

const MessagingFeed = () => {
    return (
        <div id="messagingFeed">

        </div>
    )
}