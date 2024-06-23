import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/solid'
import './Slider.css'

export default function Slider() {
    return (
        <>
            <p className="index-key">Slider</p>
            <div className="slider">
                <p className="slider-title">Slide 1</p>
                <img src="/images/img-3.jpg" alt="slide 1" className="slider-image"/>

                <button className="navigation-button-prev">
                    <ArrowLeftCircleIcon className="navigation-button-icon-prev"/>
                </button>
                <button className="navigation-button-next">
                    <ArrowRightCircleIcon className="navigation-button-icon-next"/>
                </button>
            </div>
        </>
    )
}