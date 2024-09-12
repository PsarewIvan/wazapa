import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';
import { CARDS } from './constants';
import styles from './Cards.module.scss';

function Cards() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: true,
                    swipe: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                    swipe: true,
                },
            },
        ],
    };

    return (
        <section className={styles['section']}>
            <SlickSlider {...settings}>
                {CARDS.map((card, index) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                        index={index + 1}
                    />
                ))}
            </SlickSlider>
        </section>
    );
}

export default Cards;
