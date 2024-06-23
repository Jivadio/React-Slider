import {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import './Slider.css'
import sliderData from '../../data/sliderData'

export default function Slider() {

    const [index, setIndex] = useState(1)

    function toggleImage(indexPayload) {
        let newState;
        if (indexPayload + index > sliderData.length) {
            newState = 1;
        } else if (indexPayload + index < 1) {
            newState = sliderData.length;
        } else {
            newState = index + indexPayload;
        }

        setIndex(newState);
    }

    return (
        <>
            <p className="index-key">{index}/{sliderData.length}</p>
            <div className="slider">
                <p className="slider-title">{sliderData.find(obj => obj.id === index).title}</p>
                <img src={`/images/img-${index}.jpg`} alt="slide 1" className="slider-image"/>

                <button onClick={() => toggleImage(-1)} className="navigation-button prev-button">
                    <ChevronLeftIcon className="navigation-button-icon-prev"/>
                </button>
                <button onClick={() => toggleImage(1)} className="navigation-button next-button">
                    <ChevronRightIcon className="navigation-button-icon-next"/>
                </button>
            </div>
        </>
    )
}