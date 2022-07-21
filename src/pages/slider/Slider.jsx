import { Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";

export const Slider = () => {
  const [imgSlider, setImgSlider] = useState([
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
  ]);
  const carouselRef = useRef(null);
  let resetTimeout;
  let time_carousel = 1500;
  return (
    <Paper>
      <Carousel
        focusOnSelect={true}
        autoPlaySpeed={time_carousel}
        enableAutoPlay={true}
        enableSwipe={false}
        ref={carouselRef}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === imgSlider.length) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0);
            }, time_carousel); // same time
          }
        }}
      >
        {imgSlider &&
          imgSlider.map((img, index) => (
            <div key={img.label}>
              {imgSlider.length > 0 ? (
                <img src={img.imgPath} alt={img.label} />
              ) : null}
            </div>
          ))}
      </Carousel>
    </Paper>
  );
};
