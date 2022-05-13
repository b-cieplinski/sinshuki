import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App({heroImage, image1 ,image2 ,image3, image4, image5, image6, image7}) {
  return (
    <>
      <Swiper 
      pagination={{
          type: "progressbar",
        }} 
        navigation={true} 
        modules={[Navigation, Pagination,]} 
        className="mySwiper">
        <SwiperSlide> <img src={heroImage}  /></SwiperSlide>
        {image1.length > 0 &&
        <SwiperSlide><img src={image1} /></SwiperSlide>
      }
      {image2.length > 0 &&
        <SwiperSlide><img src={image2}  /></SwiperSlide>
      }
      {image3.length > 0 &&
        <SwiperSlide><img src={image3}  /></SwiperSlide>
      }
      {image4.length > 0 &&
        <SwiperSlide><img src={image4}  /></SwiperSlide>
      }
      {image5.length > 0 &&
        <SwiperSlide><img src={image5} /></SwiperSlide>
      }
      {image6.length > 0 &&
        <SwiperSlide><img src={image6}  /></SwiperSlide>
      }
      {image7.length > 0 &&
        <SwiperSlide><img src={image7}  /></SwiperSlide>
      }
      </Swiper>
    </>
  );
}