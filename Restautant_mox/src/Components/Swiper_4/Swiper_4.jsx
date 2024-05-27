import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper_4.css';

import { Pagination, Navigation } from 'swiper/modules';

import sec12_1 from '../../Images/homePage/sec12_1.png'
import sec12_2 from '../../Images/homePage/sec12_2.png'
import sec12_3 from '../../Images/homePage/sec12_3.png'
import sec12_4 from '../../Images/homePage/sec12_4.png'
import sec12_5 from '../../Images/homePage/sec12_5.png'

export default function MySwiper_4() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                // autoHeight={true}
                spaceBetween={0}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Navigation, Pagination]}
                className="mySwiper"

                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col p-5">
                            <img src={sec12_1} alt="sec12_1" className='img-fluid' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col p-5">
                            <img src={sec12_2} alt="sec12_2" className='img-fluid' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col p-5">
                            <img src={sec12_3} alt="sec12_2" className='img-fluid' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">

                        <div className="col p-5">
                            <img src={sec12_4} alt="sec12_3" className='img-fluid' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">

                        <div className="col p-5">
                            <img src={sec12_5} alt="sec12_5" className='img-fluid' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}