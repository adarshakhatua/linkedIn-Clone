import "../style/feed.page/feedpage.css";
import { TabTitle } from "../utils/generalFunction";
import { UserFeed } from "../components/feed.page/user.feed";
import { DiscoverFeed } from "../components/feed.page/discover.feed";
import { CreatePostFeed } from "../components/feed.page/createPost.feed";
import { NewsFeed } from "../components/feed.page/news.feed";
import { AdFeed } from "../components/feed.page/ad.feed";
import { AboutFeed } from "../components/feed.page/about.feed";
import { MessagingFeed } from "../components/feed.page/message.feed";
import { Contentfeed } from "../components/feed.page/content.feed";



import { useEffect } from "react";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";


export const FeedPage = () => {

    TabTitle("Feed | LinkedIn");

    //To position discover feed and ad feed while scrolling starts here.....
    const [user, setUser] = useState(document.getElementById("userFeed"));
    const [news, setNews] = useState(document.getElementById("newsFeed"));
    //to update the user after initial loading
    useEffect(() => {
        setUser(document.getElementById("userFeed"));
        setNews(document.getElementById("newsFeed"))
    }, []);
    
    let options = { root: null, rootMargin: "-74px 0px 0px 0px" };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry.target.id);
            if (!entry.isIntersecting && entry.target.id === "userFeed") {
                document.getElementById("discoverFeed").style = "position:fixed;top:75px"
            }
            else if (entry.isIntersecting && entry.target.id === "userFeed") {
                document.getElementById("discoverFeed").setAttribute("style", "position:static")
            }
            else if (entry.isIntersecting && entry.target.id === "newsFeed") {
                document.getElementById("AdFeed").setAttribute("style", "position:static");
                document.getElementById("aboutFeed").setAttribute("style", "position:static");
            }
            else if (!entry.isIntersecting && entry.target.id === "newsFeed") {
                document.getElementById("AdFeed").style = "position:fixed;top:75px";
                document.getElementById("aboutFeed").style = "position:fixed;top:350px";
            }
        });
    }, options)

    useEffect(() => {
        if (user) { observer.observe(user) }
        if (news) { observer.observe(news) }
    },[user,news])
    //To position discover feed and ad feed while scrolling ends here.....
    
    
    return (
        <div id="FeedPage">
            <div id="leftUserFeed">
                <UserFeed />
                <DiscoverFeed/>
            </div>

            <div id="mainUserFeed">
                <CreatePostFeed />
                <button>
                    <hr />
                    <div>
                        <span>Sort by:</span>
                        <span>Top</span>
                        <RiArrowDownSFill/>
                    </div>
                </button>
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

