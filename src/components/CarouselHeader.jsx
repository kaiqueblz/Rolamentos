import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  { src: '/carousel/1.png', alt: 'Slide 1' },
  { src: '/carousel/2.png', alt: 'Slide 2' },
  { src: '/carousel/3.jpeg', alt: 'Slide 3' },
  { src: '/carousel/4.png', alt: 'Slide 4' },
];

export default function CarouselHeader() {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        transitionTime={800}
        swipeable={true}
        emulateTouch={true}
      >
        {slides.map((slide, idx) => (
          <div key={idx}>
            <img src={slide.src} alt={slide.alt} />
            {/* Se quiser legenda */}
            {/* <p className="legend">{slide.alt}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}