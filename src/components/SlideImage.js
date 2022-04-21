import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { Image } from "../elements";

export default function SlideImage() {
  const imageList = useSelector((state) => state.Post.detailList.imageList);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageList?.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image src={`${image}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
