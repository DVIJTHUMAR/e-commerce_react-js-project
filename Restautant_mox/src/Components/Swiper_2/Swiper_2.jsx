import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper_2.css';

import { Pagination, Navigation } from 'swiper/modules';

import { FaLeaf, FaWeight } from 'react-icons/fa';

import sec_5_1 from '../../Images/homePage/sec-5-1.jpg'
import sec_5_2 from '../../Images/homePage/sec-5-2.jpg'
import sec_5_3 from '../../Images/homePage/sec-5-3.jpg'
import sec_5_4 from '../../Images/homePage/sec-5-4.jpg'

export default function MySwiper_2() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                // autoHeight={true}
                spaceBetween={0}
                navigation={true}
                // pagination={{
                //     clickable: Audio,
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
                    <div className="row">
                        <div className="col">
                            <div className="col swiper-1">
                                <img src={sec_5_1} alt="sec_3_1" className='img-fluid rounded-top' style={{ width: "323.66px", height: "313.66px" }} />
                            </div>
                            <div className="col  text-start border-white bg-light rounded-bottom p-2">
                                <h3 className='pt-2 fs-5'>
                                    <a href="#">
                                        Beef Languet With Potato
                                    </a>
                                </h3>
                                <p className='pt-2' style={{ fontSize: "14px" }}>
                                    Beef tenderloin, butter, black pepper, tomatoes, potato.
                                </p>
                                <div className="col py-2">
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Category:</span>
                                        <span className='px-1 text-secondary'>........................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Meat Courses</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Availibility:</span>
                                        <span className='px-1 text-secondary'>................................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Available</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaWeight /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Weight:</span>
                                        <span className='px-1 text-secondary'>.............................................</span>
                                        <span className='' style={{ fontSize: "14px" }}>220g</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaLeaf /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Vegetarian:</span>
                                        <span className='px-1 text-secondary'>..........................................</span>
                                        <span className='' style={{ fontSize: "14px" }}>No</span>
                                    </p>
                                </div>
                                <p className='border-bottom d-flex justify-content-between pb-2'>
                                    <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                                    <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                    </span>
                                </p>
                                <p className='py-2 d-flex justify-content-between'>
                                    <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$18.50</span>
                                    <span className='m-0 fs-5'>
                                        <i class="bi bi-heart pe-3"></i>
                                        <i class="bi bi-cart3 pe-4"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row">
                        <div className="col">
                            <div className="col swiper-1">
                                <img src={sec_5_2} alt="sec_3_1" className='img-fluid rounded-top' style={{ width: "323.66px", height: "313.66px" }} />
                            </div>
                            <div className="col text-start border-white bg-light rounded-bottom p-2">
                                <h4 className='pt-2 fs-5'>
                                    <a href="#">
                                        Chick Saj
                                    </a>
                                </h4>
                                <p className='pt-2' style={{ fontSize: "14px" }}>
                                    Chick, onion, tomatoes, bell pepper, eggplants, potato, lavash.
                                </p>
                                <div className="col py-2">
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Category:</span>
                                        <span className='px-1 text-secondary'>...........................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Chicken Courses</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Availibility:</span>
                                        <span className='px-1 text-secondary'>.........................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Available</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaWeight /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Weight:</span>
                                        <span className='px-1 text-secondary'>.......................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>230g</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaLeaf /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Vegetarian:</span>
                                        <span className='px-1 text-secondary'>...................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>No</span>
                                    </p>
                                </div>
                                <p className='border-bottom d-flex justify-content-between pb-2'>
                                    <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                                    <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                    </span>
                                </p>
                                <p className='py-2 d-flex justify-content-between'>
                                    <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$18.50</span>
                                    <span className='m-0 fs-5'>
                                        <i class="bi bi-heart pe-3"></i>
                                        <i class="bi bi-cart3 pe-4"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row">
                        <div className="col">
                            <div className="col swiper-1">
                                <img src={sec_5_3} alt="sec_3_1" className='img-fluid rounded-top' style={{ width: "323.66px", height: "313.66px" }} />
                            </div>
                            <div className="col text-start border-white bg-light rounded-bottom p-2">
                                <h4 className='pt-2 pb-1 fs-5'>
                                    <a href="#">
                                        Chicken Languet With Potato
                                    </a>
                                </h4>
                                <p className='py-2 mb-1 pt-1' style={{ fontSize: "14px" }}>
                                    Chicken fillet, potato, tomatoes
                                </p>
                                <div className="col py-2 pt-3">
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Category:</span>
                                        <span className='px-1 text-secondary'>...........................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Chicken Courses</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Availibility:</span>
                                        <span className='px-1 text-secondary'>.........................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Available</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaWeight /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Weight:</span>
                                        <span className='px-1 text-secondary'>.......................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>140g</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaLeaf /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Vegetarian:</span>
                                        <span className='px-1 text-secondary'>...................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>No</span>
                                    </p>
                                </div>
                                <p className='border-bottom d-flex justify-content-between pb-2'>
                                    <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                                    <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                    </span>
                                </p>
                                <p className='py-2 d-flex justify-content-between'>
                                    <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$12.50</span>
                                    <span className='m-0 fs-5'>
                                        <i class="bi bi-heart pe-3"></i>
                                        <i class="bi bi-cart3 pe-4"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row">
                        <div className="col">
                            <div className="col swiper-1">
                                <img src={sec_5_4} alt="sec_3_1" className='img-fluid rounded-top'  />
                            </div>
                            <div className="col text-start border-white bg-light rounded-bottom p-2">
                                <h4 className='pt-2 fs-5'>
                                    <a href="#">
                                        Tomatoes Marinated in Vinegar
                                    </a>
                                </h4>
                                <p className='pt-2' style={{ fontSize: "14px" }}>
                                    Tomatoes, grape vinegar, parsley, pumpkin seeds, olive oil, garlic.
                                </p>
                                <div className="col py-2">
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Category:</span>
                                        <span className='px-1 text-secondary'>.......................................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Appetizers</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Availibility:</span>
                                        <span className='px-1 text-secondary'>.........................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Available</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaWeight /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Weight:</span>
                                        <span className='px-1 text-secondary'>.......................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>120g</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaLeaf /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Vegetarian:</span>
                                        <span className='px-1 text-secondary'>...................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Yes</span>
                                    </p>
                                </div>
                                <p className='border-bottom d-flex justify-content-between pb-2'>
                                    <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                                    <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                    </span>
                                </p>
                                <p className='py-2 d-flex justify-content-between'>
                                    <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$3.90</span>
                                    <span className='m-0 fs-5'>
                                        <i class="bi bi-heart pe-3"></i>
                                        <i class="bi bi-cart3 pe-4"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="row">
                        <div className="col">
                            <div className="col swiper">
                                <img src={sec_5_4} alt="sec_3_1" className='img-fluid rounded-top'  />
                            </div>
                            <div className="col text-start border-white bg-light rounded-bottom p-2">
                                <h4 className='pt-2 fs-5'>
                                    <a href="#">
                                        Tomatoes Marinated in Vinegar
                                    </a>
                                </h4>
                                <p className='pt-2' style={{ fontSize: "14px" }}>
                                    Tomatoes, grape vinegar, parsley, pumpkin seeds, olive oil, garlic.
                                </p>
                                <div className="col py-2">
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Category:</span>
                                        <span className='px-1 text-secondary'>.......................................</span>
                                        <span className='' style={{ fontSize: "14px" }}>Appetizers</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                        <span className='' style={{ fontSize: "14px" }}>Availibility:</span>
                                        <span className='px-1 text-secondary'>.........................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Available</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaWeight /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Weight:</span>
                                        <span className='px-1 text-secondary'>.......................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>120g</span>
                                    </p>
                                    <p className='d-flex'>
                                        <span className='pe-2'><FaLeaf /></span>
                                        <span className='' style={{ fontSize: "14px" }}>Vegetarian:</span>
                                        <span className='px-1 text-secondary'>...................................................</span>
                                        <span className='text-end' style={{ fontSize: "14px" }}>Yes</span>
                                    </p>
                                </div>
                                <p className='border-bottom d-flex justify-content-between pb-2'>
                                    <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                                    <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                        <i class="bi bi-star-fill px-1"></i>
                                    </span>
                                </p>
                                <p className='py-2 d-flex justify-content-between'>
                                    <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$3.90</span>
                                    <span className='m-0 fs-5'>
                                        <i class="bi bi-heart pe-3"></i>
                                        <i class="bi bi-cart3 pe-4"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}