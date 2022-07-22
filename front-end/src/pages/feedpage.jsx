import "../style/feedpage.css";
import { TabTitle } from "../utils/generalFunction";
import { UserFeed } from "../components/user.feed";
import { DiscoverFeed } from "../components/discover.feed";
import { CreatePostFeed } from "../components/createPost.feed";
import { NewsFeed } from "../components/news.feed";
import { AdFeed } from "../components/ad.feed";
import { AboutFeed } from "../components/about.feed";
import { MessagingFeed } from "../components/message.feed";


export const FeedPage = () => {

    TabTitle("Feed | LinkedIn");

    return (
        <div id="FeedPage">
            <div id="leftUserFeed">
                <UserFeed />
                <DiscoverFeed/>
            </div>

            <div id="mainUserFeed">
                <CreatePostFeed />
                <Contentfeed/>
            </div>

            <div id="rightUserFeed">
                <NewsFeed />
                <AdFeed />
                <AboutFeed/>
            </div>

            <div id="messageFeed">
                <MessagingFeed/>
            </div>

        </div>
    )
}








const Contentfeed = () => {
    return (
        <div id="contentFeed">

        </div>
    )
}

