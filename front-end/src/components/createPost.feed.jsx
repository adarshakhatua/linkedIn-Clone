import "../style/createPost.feed.css";
import { Photo,Video,Event,Article } from "./custom.icon";

export const CreatePostFeed = () => {
    return (
        <div id="createPostFeed">
            <div id="createPostFeed1">
                <div id="createrImgDiv">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE732pYOz74lw/profile-displayphoto-shrink_100_100/0/1649706029434?e=1663804800&v=beta&t=QuJxqFe_hwWQtwemok7NeSjOANgS0YHYrXqqdnuHbdw" alt="" />
                </div>
                <div id="createrInputDiv">Start a post about a topic that excites you</div>
            </div>

            <div id="createPostFeed2">
                <div id="createPostPhotoDiv" className="createPostComponent"><Photo /><p>Photo</p></div>
                <div id="createPostVideoDiv" className="createPostComponent"><Video /><p>Photo</p></div>
                <div id="createPostEventDiv" className="createPostComponent"><Event /><p>Event</p></div>
                <div id="createPostWriteArticleDiv" className="createPostComponent"><Article /><p>Write article</p></div>
            </div>

        </div>
    )
}