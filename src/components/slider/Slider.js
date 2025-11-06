"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";

export default function Slider() {
  const mainSwiperRef = useRef(null);
  const navSwiperRef = useRef(null);

  useEffect(() => {
    if (mainSwiperRef.current && navSwiperRef.current) {
      mainSwiperRef.current.controller.control = navSwiperRef.current;
      navSwiperRef.current.controller.control = mainSwiperRef.current;
    }
  }, []);

  const slides = [
    { id: 1, img: "/header1.jpg", title: "Luxury Villas in Palm Jumeirah" },
    { id: 2, img: "/header2.jpg", title: "Downtown Dubai Apartments" },
    { id: 3, img: "/header3.jpg", title: "Exclusive Dubai Marina Homes" },
    { id: 4, img: "/header4.jpg", title: "Modern Business Bay Offices" },
    { id: 5, img: "/header2.jpg", title: "Elegant Townhouses in JVC" },
  ];

  return (
    <div className="sliderWrapper" data-aos="slide-right">
      {/* Main Slider */}
      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        modules={[Navigation, Controller, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="main-slider"
        watchSlidesProgress
        grabCursor
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slideBg">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="slideImage"
                priority
              />
              <div className="caption">
                <h2>{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>

      {/* Navigation Slider */}
      <Swiper
        onSwiper={(swiper) => (navSwiperRef.current = swiper)}
        modules={[Controller]}
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        direction="vertical"
        spaceBetween={5}
        slideToClickedSlide
        className="nav-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="navThumb">
              <Image
                src={slide.img}
                alt={slide.title}
                width={100}
                height={100}
                className="navImage"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
