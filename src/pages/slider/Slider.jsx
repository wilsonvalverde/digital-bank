import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import colors from "../../styles/theme/base/colors";

export const Slider = () => {
  const [imgSlider, setImgSlider] = useState([
    {
      label: "Banca virtual",
      imgPath: "/assets/images/banca_virtual.jpeg",
    },
    {
      label: "App movil",
      imgPath: "/assets/images/app_movil.png",
    },
    {
      label: "Wallet",
      imgPath: "/assets/images/billetera.png",
    },
    {
      label: "Bot",
      imgPath: "/assets/images/bot.png",
    },
    {
      label: "Apertura de cuenta",
      imgPath: "/assets/images/apertura_cuenta.png",
    },
  ]);
  const carouselRef = useRef(null);
  let resetTimeout;
  let time_carousel = 1500;
  return (
    <Grid
      container
      sx={{
        backgroundColor: colors.transparent.main,
      }}
    >
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
    </Grid>
  );
};
