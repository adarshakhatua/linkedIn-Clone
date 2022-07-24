import "../style/reactionButton.css";
import { useState } from "react";

export const LikeButton = ({ buttonName, icon }) => {

    const [reaction, setReaction] = useState(false);
    let id;
    const handleReaction = (state) => {
        if (id) { clearTimeout(id) }
        id = setTimeout(() => { setReaction(state); }, 500);
    }

    return (
        <div id="LikeButton" onMouseEnter={() => { handleReaction(true) }} onMouseLeave={() => { handleReaction(false) }} >
            <button  >
                {icon}
                <span>{buttonName}</span>
            </button>
            <div>{reaction && <ReactionDiv />}</div>
        </div>
        
    )
}

const ReactionDiv = () => {
    return (
        <span id="reactionPop">
            <Reaction image={"https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"} text={"Like"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"} text={"Celebrate"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"} text={"Support"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl"} text={"Funny"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm"} text={"Love"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl"} text={"Insightful"} />
            <Reaction image={"https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh"} text={"Curious"} />
        </span>
    )
}

const Reaction = ({ image, text }) => {
    const [txt, setTxt] = useState(false);
    const [classChange, setClassChange] = useState("animate bounce");
    const handleText = (state) => {
        setTxt(state)
    }
    const handleClassChange = () => {
        setClassChange("smoothRevert");
    }

    return (
        <div onMouseEnter={() => { handleText(true) }} onMouseLeave={() => { handleText(false); handleClassChange() }} >
            <img className={classChange} src={image} alt="" />
            {txt && <p className="ReactionPopTextDiv">{text}</p>}
        </div>
    )
}