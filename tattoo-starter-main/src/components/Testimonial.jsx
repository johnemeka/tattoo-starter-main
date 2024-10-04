import React, { useRef } from 'react';
import { testimonialData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



const Testimonial = () => {
  // Create a ref for Swiper
  const swiperRef = useRef(null);

  return (
    <motion.section 
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='py-[40px] lg:pb-[160px] lg:pt-0 relative' >
      <div className="container mx-auto">
        {/* Swiper component */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonialData.map((slide, index) => {
            // Destructure slide
            const { quoteImg, message, name, occupation } = slide;
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {/* Quote img */}
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="" />
                  </div>
                  {/* Message, name & occupation */}
                  <div className="flex-1 lg:mt-[54px]">
                    {/* Message */}
                    <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">{message}</div>

                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      {/* Name */}
                      <div className="font-semibold">{name}</div>
                      <span className='mx-4 font-bold'>|</span>
                      {/* Occupation */}
                      <div className="font-light">{occupation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Previous and Next buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 hidden md:block text-white rounded-full"
          >
            <GrPrevious />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 hidden md:block text-white rounded-full"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
