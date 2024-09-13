import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade, Navigation, } from 'swiper/modules';

export default function Hero() {
    return (
        <>
            <section className='relative group/swiperBtn'>
                <button className="swiperButton right-3 md:right-[50px] swiper-button-next">
                    <IoIosArrowForward />
                </button>
                <button className="swiperButton left-3 md:left-[50px] swiper-button-prev">
                    <IoIosArrowBack />
                </button>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }} effect="fade" loop={true} modules={[Autoplay, EffectFade, Navigation,]} className="mySwiper">
                    <SwiperSlide>
                        <article className='relative'>
                            <picture>
                                <source srcSet='/slider1-small.jpg 350h' media='(max-width:575px)' />
                                <source srcSet='/slider1-large.jpg' media='(min-width:576px)' />
                                <img src="/slider1-large.jpg" alt="" />
                            </picture>
                            <SliderText>
                                <h3 className='text-xl lg:text-[80px] font-bold leading-none uppercase mb-[5px] md:mb-[15px]'>
                                    Magic
                                    <br />
                                    UNWRAPPED
                                </h3>
                                <p className='text-sm md:text-2xl mb-[15px] md:mb-10'>Everyone deserves a piece of heaven.</p>
                            </SliderText >
                        </article>
                    </SwiperSlide>

                    <SwiperSlide>
                        <article className='relative'>
                            <picture>
                                <source srcSet='/slider2-small.jpg 350h' media='(max-width:575px) ' />
                                <source srcSet='/slider2-large.jpg' media='(min-width:576px)' />
                                <img src="/slider2-large.jpg" alt="" />
                            </picture>
                            <SliderText>
                                <h3 className='text-xl lg:text-[80px] leading-none uppercase mb-[5px] md:mb-[15px] text-[#333]'>
                                    <b>50% OFF ON</b>
                                    <br />
                                    SMART WATCH
                                </h3>
                                <p className='text-sm md:text-2xl mb-[15px] md:mb-10 text-[#333]'>Don't Miss Your Last Chance.</p>
                            </SliderText >
                        </article>
                    </SwiperSlide>
                </Swiper>
            </section >
        </>
    );
}


function SliderText({ children }) {
    return (
        <div className='block absolute top-[50%] translate-y-[-50%] left-[40%] translate-x-[-40%] lg:left-[20%] lg:translate-x-[-20%] z-5'>
            <div className="relative animate-[scaleUp_500ms_linear] text-white transition duration-[3s] ease-in-out">
                {children}
                <button className='text-xs md:text-[15px] bg-[#333] border-[1px] border-solid border-[#333] p-[10px_16px] uppercase rounded transition-all lg:p-[16px_40px]hover:text-[#333] hover:bg-white'>Shop Now</button>
            </div>
        </div>
    )
}