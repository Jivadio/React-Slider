import React, {useState, useEffect} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import './Slider.css'
import sliderData from '../../data/sliderData'

export default function Slider() {

    const [index, setIndex] = useState(1)

    function toggleImage(indexPayload) {
        setIndex(state => {
            if (indexPayload + state > sliderData.length) {
                return 1;
            } else if (indexPayload + state < 1) {
                return sliderData.length;
            } else {
                return state + indexPayload;
            }
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            toggleImage(1);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <p className="index-key">{index}/{sliderData.length}</p>
            <div className="slider" data-testid="slider">
                <p className="slider-title"
                   data-testid="slider-title-test">{sliderData.find(obj => obj.id === index).title}</p>
                <img src={`/images/img-${index}.jpg`} alt={sliderData.find(obj => obj.id === index).description}
                     className="slider-image"/>

                <button data-testid="prev-button" onClick={() => toggleImage(-1)}
                        className="navigation-button prev-button">
                    <ChevronLeftIcon className="navigation-button-icon-prev" alt="previous button"/>
                </button>
                <button data-testid="next-button" onClick={() => toggleImage(1)}
                        className="navigation-button next-button">
                    <ChevronRightIcon className="navigation-button-icon-next" alt="next button"/>
                </button>
            </div>
        </>
    )
}