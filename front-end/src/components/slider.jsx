import { useState, useEffect, } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { sliderData } from "../utils/data";




export const Slider = () => {

    const [data] = useState(sliderData);
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [classPrev, setClassPrev] = useState("");
    const [classNext, setClassNext] = useState("");


    const handleIndex = (params) => {
        if (index <= 0 && params < 0) {
            setIndex(0);
            setPrev(false);
        }
        else if (index >= data.length - 1 && params > 0) {
            setIndex(data.length - 1);
            setNext(false);
        }
        else {
            setIndex(index + params);
            setPrev(true);
            setNext(true);
            setClassNext("");
            setClassPrev("");
        }
    }


    useEffect(() => {
        if (index === 0) { setPrev(false); setClassPrev("notAllowed"); }
        if (index === data.length - 1) { setNext(false); setClassNext("notAllowed") }

    }, [index,data.length]);


    useEffect(() => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = index * 1120;
    }, [index])


    return <div id="rightPeopleDivContent">

        <div id="rightPeopleDivSliderBtn">
            <button onClick={() => { handleIndex(-1) }} disabled={!prev} className={classPrev}><IoIosArrowBack fontSize={"24px"} /><p>Previous</p></button>
            <button onClick={() => { handleIndex(1) }} disabled={!next} className={classNext}><p>Next</p><IoIosArrowForward fontSize={"24px"} /></button>
        </div>

        <div id="slider">
            {data.map((item) => {
                return <div className="rightPeopleDivSlider" id={item.id} key={item.id}>

                    <div id="rightPeopleDivSliderLeft">
                        <h1>{item.heading}</h1>
                        <p>{item.details}</p>
                    </div>

                    <div id="rightPeopleDivSliderRight">
                        <img src={item.Image} alt="" />
                    </div>

                </div>
            })}
        </div>


    </div>
}