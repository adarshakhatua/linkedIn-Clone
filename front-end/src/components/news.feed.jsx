import "../style/news.feed.css";
import { EyeButton } from "./custom.icon";
import { news } from "../utils/data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";


export const NewsFeed = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        if (!show) {
            let ans = [];
            for (let i = 0; i < news.length / 2; i++) {
                ans.push(news[i]);
            }
            setData(ans);
        }
        else {
            setData(news);
        }
    },[show])

    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        setPopup(!popup);
        if (!popup) {
            document.getElementById("unlist").setAttribute("style", "margin-top:-68px")
        }
        else {
            document.getElementById("unlist").setAttribute("style", "margin-top:10px")
        }
    }
    useEffect(() => {
        document.body.addEventListener("click", (e) => { if ((e.target.id !== "unlist" && e.target.id !== "eyePopUpDiv" && e.target.id !== "") && popup) { setPopup(false); document.getElementById("unlist").setAttribute("style", "margin-top:10px"); } })
    });


    //console.log(document.body)
    
    return (
        <div id="newsFeed">
            <div id="newsFeedHeading">
                <p>LinkedIn News</p>
                <div id="eyeButton" onClick={handlePopup}>
                    <EyeButton/>
                </div>
            </div>
            {popup && <div id="eyePopUpDiv">
                <p>These are the day’s top professional news stories and conversations. <span>Learn more</span> about how they’re selected.</p>
                <MdClose onClick={handlePopup} style={ {cursor:"pointer"}} />
            </div>}
            <ul id="unlist">
                {data.map((item) => {
                    return <li key={item.count} className="listItem">{item.heading}<div className="listItemSub"><p>{item.time} ago </p><p>• {item.count} readers</p></div></li>
                })}
            </ul>
            <div id="newsFeedShowMore" onClick={() => { handleShow(); }}>{show ? "Show less" : "Show more"}{show ? <IoIosArrowUp /> : <IoIosArrowDown/>}</div>

        </div>
    )
}

