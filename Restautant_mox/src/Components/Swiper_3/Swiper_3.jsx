import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper_3.css';

import { Pagination, Navigation } from 'swiper/modules';

import { FaLink } from 'react-icons/fa';

import sec7_1 from '../../Images/homePage/sec7-1.jpg'
import sec7_2 from '../../Images/homePage/sec7-2.jpg'
import sec7_3 from '../../Images/homePage/sec7-3.jpg'
import sec7_4 from '../../Images/homePage/sec7-4.jpg'

import { RiFacebookBoxFill } from 'react-icons/ri';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

export default function MySwiper_3() {
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
                        <div className="col card-7 text-center p-0">
                            <div className="img-7-1 ">
                                <img src={sec7_1} alt="sec7_1" className='img-fluid rounded-top' />
                            </div>
                            <div className="detail-7-1 rounded-bottom">
                                <h6>
                                    Andy Warhol
                                </h6>
                                <p>Head of Chef</p>
                                <p className='pb-3 text-warning'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>
                                <div className="icon-7 border-top pt-2 d-flex gap-4">
                                    <div className="col d-none d-xl-flex d-xl-block justify-content-center">
                                        <p className='align-items-center d-flex fs-4 gap-1 text-secondary '>
                                            <RiFacebookBoxFill />
                                            <AiFillTwitterSquare />
                                            <AiFillLinkedin />
                                            <AiFillInstagram />
                                            <FaLink />
                                        </p>
                                    </div>
                                    <div className="col bg-danger bg-opacity-25 rounded">
                                        <a href="#" style={{ fontSize: "13px" }}>
                                            VIEW PROFILE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col card-7 text-center p-0">
                            <div className="img-7-1">
                                <img src={sec7_2} alt="sec7_2" className='img-fluid rounded-top' />
                            </div>
                            <div className="detail-7-1 rounded-bottom">
                                <h6>
                                    Andy Warhol
                                </h6>
                                <p>Head of Chef</p>
                                <p className='pb-3 text-warning'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>
                                <div className="icon-7 border-top pt-2 d-flex gap-4">
                                    <div className="col d-none d-xl-flex d-xl-block justify-content-center">
                                        <p className='align-items-center d-flex fs-4 gap-1 text-secondary'>
                                            <RiFacebookBoxFill />
                                            <AiFillTwitterSquare />
                                            <AiFillLinkedin />
                                            <AiFillInstagram />
                                            <FaLink />
                                        </p>
                                    </div>
                                    <div className="col bg-danger bg-opacity-25 rounded">
                                        <a href="#" style={{ fontSize: "13px" }}>
                                            VIEW PROFILE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col card-7 text-center p-0">
                            <div className="img-7-1">
                                <img src={sec7_3} alt="sec7_3" className='img-fluid rounded-top' />
                            </div>
                            <div className="detail-7-1 rounded-bottom">
                                <h6>
                                    Andy Warhol
                                </h6>
                                <p>Head of Chef</p>
                                <p className='pb-3 text-warning'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>
                                <div className="icon-7 border-top pt-2 d-flex gap-4">
                                    <div className="col d-none d-xl-flex d-xl-block justify-content-center">
                                        <p className='align-items-center d-flex fs-4 gap-1 text-secondary'>
                                            <RiFacebookBoxFill />
                                            <AiFillTwitterSquare />
                                            <AiFillLinkedin />
                                            <AiFillInstagram />
                                            <FaLink />
                                        </p>
                                    </div>
                                    <div className="col bg-danger bg-opacity-25 rounded">
                                        <a href="#" style={{ fontSize: "13px" }}>
                                            VIEW PROFILE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col card-7 text-center p-0">
                            <div className="img-7-1">
                                <img src={sec7_4} alt="sec7_4" className='img-fluid rounded-top' />
                            </div>
                            <div className="detail-7-1 rounded-bottom">
                                <h6>
                                    Andy Warhol
                                </h6>
                                <p>Head of Chef</p>
                                <p className='pb-3 text-warning'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>
                                <div className="icon-7 border-top pt-2 d-flex gap-4">
                                    <div className="col d-none d-xl-flex d-xl-block justify-content-center">
                                        <p className='align-items-center d-flex fs-4 gap-1 text-secondary'>
                                            <RiFacebookBoxFill />
                                            <AiFillTwitterSquare />
                                            <AiFillLinkedin />
                                            <AiFillInstagram />
                                            <FaLink />
                                        </p>
                                    </div>
                                    <div className="col bg-danger bg-opacity-25 rounded">
                                        <a href="#" style={{ fontSize: "13px" }}>
                                            VIEW PROFILE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="row d-flex gap-2 p-3">
                        <div className="col card-7 text-center p-0">
                            <div className="img-7-1">
                                <img src={sec7_4} alt="sec7_4" className='img-fluid rounded-top' />
                            </div>
                            <div className="detail-7-1 rounded-bottom">
                                <h6>
                                    Andy Warhol
                                </h6>
                                <p>Head of Chef</p>
                                <p className='pb-3 text-warning'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>
                                <div className="icon-7 border-top pt-2 d-flex gap-4">
                                    <div className="col d-none d-xl-flex d-xl-block justify-content-center">
                                        <p className='align-items-center d-flex fs-4 gap-1 text-secondary'>
                                            <RiFacebookBoxFill />
                                            <AiFillTwitterSquare />
                                            <AiFillLinkedin />
                                            <AiFillInstagram />
                                            <FaLink />
                                        </p>
                                    </div>
                                    <div className="col bg-danger bg-opacity-25 rounded">
                                        <a href="#" style={{ fontSize: "13px" }}>
                                            VIEW PROFILE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}