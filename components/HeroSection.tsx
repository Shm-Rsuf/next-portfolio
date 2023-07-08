"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { data } from "@/data/db";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full h-[75vh] pt-[2px]">
      <>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full h-full"
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {data?.map((values) => (
            <SwiperSlide key={values.id}>
              <div className="w-full h-full">
                <Image
                  src={values.src}
                  alt={values.alt}
                  height={1920}
                  width={1080}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default HeroSection;
