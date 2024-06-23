import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from './Slider.jsx';

describe('Slider Component', () => {
    const sliderData = [
        {id: 1, title: 'Slide 1'},
        {id: 2, title: 'Slide 2'},
        {id: 3, title: 'Slide 3'},
        {id: 4, title: 'Slide 4'},
        {id: 5, title: 'Slide 5'},
    ];

    it('renders without crashing', () => {
        render(<Slider slides={sliderData}/>);
        const sliderElement = screen.getByTestId('slider');
        expect(sliderElement).toBeInTheDocument();
    });

    it('displays correct slide data', () => {
        render(<Slider/>);

        const sliderTitle = screen.getByTestId('slider-title-test');
        expect(sliderTitle).toBeInTheDocument();
    });

    it('navigates to next slide on next button click', () => {
        render(<Slider/>);
        const nextButton = screen.getByTestId('next-button');
        fireEvent.click(nextButton);
        const secondSlide = screen.getByText(sliderData[1].title);
        expect(secondSlide).toBeInTheDocument();
    });

    it('navigates to previous slide on prev button click', () => {
        render(<Slider/>);
        const nextButton = screen.getByTestId('next-button');
        const prevButton = screen.getByTestId('prev-button');
        fireEvent.click(nextButton);
        fireEvent.click(prevButton);
        const firstSlide = screen.getByText(sliderData[0].title);
        expect(firstSlide).toBeInTheDocument();
    });

    it('displays correct slide number', () => {
        render(<Slider/>);
        const indexKey = screen.getByText('1/5');
        expect(indexKey).toBeInTheDocument();
    });

    it('displays correct slide number after navigating to next slide', () => {
        render(<Slider/>);
        const nextButton = screen.getByTestId('next-button');
        fireEvent.click(nextButton);
        const indexKey = screen.getByText('2/5');
        expect(indexKey).toBeInTheDocument();
    });

    it('displays first slide after reaching the end of the slider', () => {
        render(<Slider/>);
        const nextButton = screen.getByTestId('next-button');
        fireEvent.click(nextButton);
        fireEvent.click(nextButton);
        fireEvent.click(nextButton);
        fireEvent.click(nextButton);
        fireEvent.click(nextButton);
        const firstSlide = screen.getByText(sliderData[0].title);
        expect(firstSlide).toBeInTheDocument();
    });

    it('displays last slide after reaching the beginning of the slider', () => {
        render(<Slider/>);
        const prevButton = screen.getByTestId('prev-button');
        fireEvent.click(prevButton);
        const lastSlide = screen.getByText(sliderData[4].title);
        expect(lastSlide).toBeInTheDocument();
    });

});
