import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const ImageSlider: React.FC = () => {
  return (
    <div className="mt-72">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full">
        <SwiperSlide className="flex justify-center items-center bg-white h-full">
          <Image
            src="/Slide1.png"
            alt="Slide 1"
            width={900}
            height={900}
            className="mx-auto my-auto max-w-full max-h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-white h-full">
          <Image
            src="/Slide2.png"
            alt="Slide 2"
            width={900}
            height={900}
            className="mx-auto my-auto max-w-full max-h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-white h-full">
          <Image
            src="/Slide3.png"
            alt="Slide 3"
            width={900}
            height={900}
            className="mx-auto my-auto max-w-full max-h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
