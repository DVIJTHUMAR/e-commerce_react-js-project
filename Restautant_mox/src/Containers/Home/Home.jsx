import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Home.css'
import SecHedingH1 from '../../Components/SecHeding/SecHedingH1/SecHedingH1'
import Button from '../../Components/Button/Button'
import SecHedingH2 from '../../Components/SecHeding/SecHedingH2/SecHedingH2'
import { FaWeight, FaLeaf } from "react-icons/fa";
import { Heart, Telephone } from 'react-bootstrap-icons'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiFillGooglePlusSquare, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { MdOutlineFastfood } from "react-icons/md";

import signature from '../../Images/homePage/sec-2-signature.png'
import sec_2 from '../../Images/homePage/sec-2.jpg'

import sec_3_1 from '../../Images/homePage/sec-3-1.jpg'
import sec_3_2 from '../../Images/homePage/sec-3-2.jpg'
import sec_3_3 from '../../Images/homePage/sec-3-3.jpg'
import sec_3_4 from '../../Images/homePage/sec-3-4.jpg'

import sec_4 from '../../Images/homePage/sec-4.jpg'

import sec_5_1 from '../../Images/homePage/sec-5-1.jpg'
import sec_5_2 from '../../Images/homePage/sec-5-2.jpg'
import sec_5_3 from '../../Images/homePage/sec-5-3.jpg'
import sec_5_4 from '../../Images/homePage/sec-5-4.jpg'

import sec7_1 from '../../Images/homePage/sec7-1.jpg'
import sec7_2 from '../../Images/homePage/sec7-2.jpg'
import sec7_3 from '../../Images/homePage/sec7-3.jpg'
import sec7_4 from '../../Images/homePage/sec7-4.jpg'

import sec_10_pro from '../../Images/homePage/sec10-pro-pic.jpg'

import sec_11_mobail from '../../Images/homePage/sec-11.png'
import sec_11_google from '../../Images/homePage/sec-11-google4.png'
import sec_11_apple from '../../Images/homePage/sec-11-apple.png'

import sec12_1 from '../../Images/homePage/sec12_1.png'
import sec12_2 from '../../Images/homePage/sec12_2.png'
import sec12_3 from '../../Images/homePage/sec12_3.png'
import sec12_4 from '../../Images/homePage/sec12_4.png'
import sec12_5 from '../../Images/homePage/sec12_5.png'
import sec_12_img_b from '../../Images/homePage/sec12_img_b.png'

import MySwiper from '../../Components/Swiper/Swiper'
import MySwiper_2 from '../../Components/Swiper_2/Swiper_2'
import MySwiper_3 from '../../Components/Swiper_3/Swiper_3'
import MySwiper_4 from '../../Components/Swiper_4/Swiper_4'
import Buttonnn from '../../Components/Button/Button'


import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainHeding from '../../Components/MainHeding/MainHeding'


function Home() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <header>
                <MainHeding/>
                <Header />
            </header>
            <main>
                {/* section-1 */}
                <section className='home-sec-1'>
                    <div className="col">
                        <video className='' src='http://themeseason.com/data/videos/restaurant.mp4' autoPlay muted loop></video>
                    </div>
                    <div className="col overlay"></div>
                    <Container>
                        <Row>
                            <div className="col text-center ">
                                <SecHedingH1 h1="Welcome to Restaurant" p="BOOKING A TABLE ONLINE IS EASY" />
                                <div className="col sec-1-btn d-flex gap-3">
                                    <div className="col btn2">
                                        <Button btnn={"MENU"} />
                                    </div>
                                    <Button btnn={"RESERVATION"} />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section >
                {/* section-2 */}
                <section className='home-sec-2 py-50'>
                    <Container >
                        <Row className="">
                            <div className="col">
                                <div className="col about-heding text-center py-2 mb-4">
                                    <SecHedingH2 h2="About Us" p="Restoring authenticity to food from the ground up is the missioin that drives us. Restauration is the realization of a dream." />
                                </div>
                                <div className="col d-md-flex  ">
                                    <div className="col mx-0 col-lg-6 about-img ">
                                        <img className='img-fluid rounded-start' src={sec_2} alt="sec-2" />
                                    </div>
                                    <div className="col py-3 col-lg-6 about-info px-4 border border-start-0  rounded-end">
                                        <div className="col">
                                            <SecHedingH2 h2="Since 1987, at your service " />
                                        </div>
                                        <div className="col">
                                            <p>
                                                Restourant are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin a ullamcorper purus. Sed malesuada a dolor et aliquet.
                                            </p>
                                            <p className='py-3'>
                                                After 16 years in the restaurant business, 9 in farming, and several years dedicated to the study of nutrition, we decided now was the right time to take all that experience and synthesize it into a local eatery where people can enjoy exquisite food, support local food producers, and eat the kind of food they can feel good about.
                                            </p>
                                        </div>
                                        <div className="col d-flex align-items-center">
                                            <div className="col text-start px-2">
                                                <img src={signature} alt="signeture-sec-2" />
                                            </div>
                                            <div className="col text-end px-2">
                                                <Button btnn="READ MORE" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-3 */}
                <section className='home-sec-3 py-50'>
                    <Container>
                        <Row>
                            <div className="col text-center sec-3-menu">
                                <div className="col overlay2"></div>
                                <div className="col ">
                                    <SecHedingH2 h2="Special menu" p="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                                </div>
                                <MySwiper />
                                <div className="col pt-2">
                                    <Button btnn="VIEW ALL MENU" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-4 */}
                <section className='home-sec-4 py-50'>
                    <Container>
                        <Row>
                            <div className="col">
                                <div className="title text-center">
                                    <SecHedingH2 h2="Today Menu" p="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
                                </div>
                                <div className="col d-lg-flex border bg-light rounded">
                                    <div className="col">
                                        <img src={sec_4} alt="sec-4" className='img-fluid w-100 ' />
                                    </div>
                                    <div className="col px-5">
                                        <h4 className='py-2'>
                                            Veal With Mushrooms In Hot Sauce
                                        </h4>
                                        <p className='pb-3'>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            (4 Customer Reviews)
                                        </p>
                                        <h3 className='mb-4'>
                                            $16.50
                                        </h3>
                                        <div className="price col d-flex align-items-center">
                                            <button className=' py-0 px-2 bg-ligh border-end-0 border-1 ' type='button'><i class="bi bi-chevron-down"></i></button>
                                            <input type="text" className='' style={{ width: "50px" }} />
                                            <button className=' py-0 px-2 bg-ligh border-1 border-start-0' type='button'><i class="bi bi-chevron-up"></i></button>
                                            <div className="col ms-3">
                                                <Button btnn="ADD TO CART" />
                                            </div>
                                            <div className="col fs-2">
                                                <Heart />
                                            </div>
                                        </div>
                                        <div className="col py-2 my-2">
                                            <p className=''>
                                                <span className='pe-2'><i class="bi bi-tag-fill"></i></span>
                                                <span className='' style={{ fontSize: "14px" }}>Category: </span>
                                                <span className='fw-medium' style={{ fontSize: "14px" }}>Meat Courses</span>
                                            </p>
                                            <p className=''>
                                                <span className='pe-2'><i class="bi bi-check-circle-fill"></i></span>
                                                <span className='' style={{ fontSize: "14px" }}>Availibility: </span>
                                                <span className='fw-medium' style={{ fontSize: "14px" }}>Available</span>
                                            </p>
                                            <p className=''>
                                                <span className='pe-2'><FaWeight /></span>
                                                <span className='' style={{ fontSize: "14px" }}>Weight: </span>
                                                <span className='fw-medium' style={{ fontSize: "14px" }}>180g</span>
                                            </p>
                                            <p className=''>
                                                <span className='pe-2'><FaLeaf /></span>
                                                <span className='' style={{ fontSize: "14px" }}>Vegetarian: </span>
                                                <span className='fw-medium' style={{ fontSize: "14px" }}>No</span>
                                            </p>
                                        </div>
                                        <div className="col my-3">
                                            <h5>Ingredients</h5>
                                            <p>Veal, mushrooms, butter, sweet chili sauce, onion, cilantro.</p>
                                        </div>
                                        <div className="col d-none d-xl-flex d-xl-block">
                                            <p className='align-items-center d-flex fs-4 gap-1 text-secondary'>
                                                <span className='fs-6'>Share: </span>
                                                <RiFacebookBoxFill />
                                                <AiFillTwitterSquare />
                                                <AiFillLinkedin />
                                                <AiFillGooglePlusSquare />
                                                <AiFillInstagram />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-5 */}
                <section className='home-sec-5 py-50'>
                    <Container>
                        <Row>
                            <div className="col text-center sec-3-menu">
                                <div className="col overlay2"></div>
                                <div className="col">
                                    <SecHedingH2 h2="Our best dishes" p="The best dishes of the city for our clients." />
                                </div>
                                <MySwiper_2 />
                                <div className="col pt-5">
                                    <Button btnn="VIEW ALL MENU" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-6 */}
                <section className='home-sec-6 py-50'>
                    <Container>
                        <Row>
                            <div className="col">
                                <div className="col text-center">
                                    <SecHedingH2 h2="Our Services" p="This is what we do and we do it perfectly." />
                                </div>
                                <div className="col d-flex text-center">
                                    <div className="col d-xxl-flex gap-3 d-flex-none d-lg-flex p-3 mx-lg-0">
                                        <div className="col  my-2 p-3 rounded border" style={{ boxShadow: "5px black" }}>
                                            <div className="col  my-3" style={{ fontSize: "60px" }}>
                                                <MdOutlineFastfood />
                                            </div>
                                            <h5>Fresh Healthy Food</h5>
                                            <p style={{ fontSize: "12px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.
                                            </p>
                                        </div>
                                        <div className="col m-0 p-3 my-2 rounded border" style={{ backgroundColor: "#c62828" }}>
                                            <div className="col my-3" style={{ fontSize: "60px" }}>
                                                <i class="bi bi-truck"></i>
                                            </div>
                                            <h5>Free Fast Home Delivery</h5>
                                            <p style={{ fontSize: "12px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.
                                            </p>
                                        </div>
                                        <div className="col m-0 p-3 my-2 rounded border">
                                            <div className="col my-3" style={{ fontSize: "60px" }}>
                                                <i class="bi bi-tag-fill"></i>
                                            </div>
                                            <h5>Discount Voucher</h5>
                                            <p style={{ fontSize: "12px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.
                                            </p>
                                        </div>
                                        <div className="col m-0 p-3 my-2 rounded border" style={{ backgroundColor: "#c62828" }}>
                                            <div className="col my-3" style={{ fontSize: "60px" }}>
                                                <i class="bi bi-clock-history"></i>
                                            </div>
                                            <h5>On Time Service</h5>
                                            <p style={{ fontSize: "12px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>

                </section>
                {/* section-7 */}
                <section className='home-sec-7 py-50'>
                    <div className="blur"></div>
                    <Container>
                        <Row>
                            <div className="col content-7 ">
                                <div className="col text-center ">
                                    <SecHedingH2 h2="Meet our chefs" p="What can be better than food prepared with love" />
                                </div>
                                <MySwiper_3 />
                                <div className="col pt-3 text-center">
                                    <Button btnn="OUR CHEFS" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-8 */}
                <section className='home-sec-8'>
                    <Container>
                        <Row className=''>
                            <div className="col home-sec-8-nth d-xl-flex">
                                <div className="col d-md-flex">
                                    <div className="col-6 text-center p-4 fst-italic">
                                        <h3 className='my-4' style={{ fontSize: "32px" }}>Breakfast</h3>
                                        <p>8.00 am 10.00 am</p>
                                    </div>
                                    <div className="col-6 text-center p-4">
                                        <h3 className='my-4' style={{ fontSize: "32px" }}>Lunch</h3>
                                        <p>1.00 am 2.00 am</p>
                                    </div>
                                </div>
                                <div className="col d-md-flex">
                                    <div className="col-6 text-center p-4">
                                        <h3 className='my-4' style={{ fontSize: "32px" }}>Dinner</h3>
                                        <p>7.00 am 9.00 am</p>
                                    </div>
                                    <div className="col-6 text-center p-4">
                                        <h3 className='my-4' style={{ fontSize: "32px" }}>Dessert</h3>
                                        <p>All time</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-9 */}
                <section className='home-sec-9 reservation py-50'>
                    <Container>
                        <Row>
                            <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <SecHedingH2 h2="Reservation" p="We provide free, secure and instantly confirmed online reservation." />
                                </div>
                                <div className="p-3">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-4">
                                            <Form.Group className='col-md-6' sm="12" md="6" lg="4" xl="4" controlId="validationCustom01">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Name"
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className='col-md-6' sm="12" md="6" lg="4" xl="4" controlId="validationCustom02">
                                                <Form.Label>Number</Form.Label>
                                                <InputGroup hasValidation>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        placeholder="Number"
                                                        defaultValue=""
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className='col-md-12' sm="12" md="12" lg="4" xl="4" controlId="validationCustomUsername">
                                                <Form.Label>Email</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email"
                                                        aria-describedby="inputGroupPrepend"
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please choose a valid Email.
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-4">
                                            <Form.Group className='col-md-6' sm="12" md="6" lg="6" xl="6" controlId="validationCustom03">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="date" placeholder="Date" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid Date.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className='col-md-6' sm="12" md="6" lg="6" xl="6" controlId="validationCustom04">
                                                <Form.Label>Time</Form.Label>
                                                <Form.Control type="time" placeholder="Time" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid time.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className='col-md-12' controlId="validationCustom05">
                                                <Form.Label>Guest</Form.Label>
                                                <Form.Control type="number" placeholder="Guest" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid Guest Name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                                        </Form.Group>
                                        <div className="text-center">
                                            <Buttonnn btnn="MAKE RESERVATION" />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-10 */}
                <section className='home-sec-10'>
                    <div className="col sec10-blur"></div>
                    <Container>
                        <Row>
                            <div className="col content-10-blur text-center">
                                <div className="col text-center ">
                                    <SecHedingH2 h2="What people are saying" />
                                </div>
                                <div className="col position-relative m-0" style={{ margin: "0 24%" }}>
                                    <img src={sec_10_pro} alt="sec_10_pro" className='img-fluid rounded-circle m-0' />
                                    <p className='p-1 my-4'>
                                        <p className='text-start coma-t p-2'>"</p>
                                        Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.
                                        <p className='text-end coma-b p-2'>"</p>
                                    </p>
                                </div>
                                <div className="col text-center ">
                                    <SecHedingH2 h2="Mr. Adam Sandler" p="General Director" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* section-11 */}
                <section className='home-sec-11 py-md-5'>
                    <Container>
                        <Row className='pt-5 '>
                            <div className="col d-flex-none d-md-flex ">
                                <div className="col col-md-5  text-center">
                                    <img src={sec_11_mobail} alt="sec-11-mobail" className='img-fluid' />
                                </div>
                                <div className="col col-md-7 ">
                                    <div className="col text-start  text-white">
                                        <SecHedingH2 h2="The Best Food Delivery App" p="Online food delivery apps are certainly one of the vital apps that any food lover will have on their smartphones. And if you are a foodie then you definitely don’t just like food but you “Love” food. You literally wait for your next meal. Well, you are not the only one. There are millions of foodies who just incorporate food into their lifestyle." p1="Nowadays, there are tons of useful mobile apps that are literally dedicated to food. Right from piling up recipes, watching someone cook to ordering food online, there are online food delivery apps for every foodie." p2="Download our online food delivery apps by clicking below buttons:" />
                                    </div>
                                    <div className="col d-flex gap-3 my-5">
                                        <img src={sec_11_google} alt="sec_11_google" className='img-fluid m-0' />
                                        <img src={sec_11_apple} alt="sec_11_apple" className='img-fluid m-0' />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* sectioon-12 */}
                <section className='home-sec-12 pt-5 bg-light'>
                    <Container>
                        <Row>
                            <div className="col">
                                <div className="col-6 text-center">
                                    <SecHedingH2 h2="Our Awards" p="Mox restaurant is the best restourant in the country and been recognized with many awards. We promise to provide excellent service to you forever for happiness and success. For getting more details please visit us." />
                                </div>
                                <div className="col row gap-3 py-4" style={{ marginBottom: "6%" }}>
                                    <MySwiper_4 />
                                </div>
                                <div className="col row d-flex align-items-center text-white position-relative py-2" style={{ background: "#c62828" }}>
                                    <div className="col-2 d-none d-md-block ">
                                        <img src={sec_12_img_b} alt="sec_12_img_b" className='img-fluid position-absolute' style={{ bottom: "0" }} />
                                    </div>
                                    <div className="col col-md-6 ms-md-5 d-lg-flex mx-lg-2">
                                        <div className="col col-lg-6 me-lg-4">
                                            <h3>
                                                Looking for fresh produce?
                                            </h3>
                                            <p className='' style={{ fontSize: "15px" }}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="col-1">
                                                <Telephone style={{ fontSize: "45px" }} />
                                            </div>
                                            <div className="col px-4">
                                                <p style={{ fontSize: "12px" }}>
                                                    CALL US NOW
                                                </p>
                                                <p className='fw-bold fs-6'>
                                                    (+100) 123 456 7890
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col btn-12 button">
                                        <Buttonnn btnn="GET IN TOUCH" />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Home
