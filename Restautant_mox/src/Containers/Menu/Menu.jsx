import React from 'react'
import '../Home/Home.css'
import { Container, Row } from 'react-bootstrap'
import SecHedingH1 from '../../Components/SecHeding/SecHedingH1/SecHedingH1'
import Buttonnn from '../../Components/Button/Button'
import SecHedingH2 from '../../Components/SecHeding/SecHedingH2/SecHedingH2'

import menu_img from '../../Images/menu/menu.jpg'

import sec_3_1 from '../../Images/homePage/sec-3-1.jpg'
import sec_3_2 from '../../Images/homePage/sec-3-2.jpg'
import sec_3_3 from '../../Images/homePage/sec-3-3.jpg'
import sec_3_4 from '../../Images/homePage/sec-3-4.jpg'
import { FaLeaf, FaWeight } from 'react-icons/fa'

import sec12_1 from '../../Images/homePage/sec12_1.png'
import sec12_2 from '../../Images/homePage/sec12_2.png'
import sec12_3 from '../../Images/homePage/sec12_3.png'
import sec12_4 from '../../Images/homePage/sec12_4.png'
import sec12_5 from '../../Images/homePage/sec12_5.png'
import sec_12_img_b from '../../Images/homePage/sec12_img_b.png'


import MySwiper_4 from '../../Components/Swiper_4/Swiper_4'
import { Telephone } from 'react-bootstrap-icons'
import Footer from '../../Components/Footer/Footer'
import MainHeding from '../../Components/MainHeding/MainHeding'
import Header from '../../Components/Header/Header'

function Menu() {
  return (
    <>
      <header>
        <MainHeding />
        <Header />
      </header>
      <main>
        {/* section-1 */}
        <section className='home-sec-1 menu-sec-1'>
          <div className="col">
            {/* <video className='' src='http://themeseason.com/data/videos/restaurant.mp4' autoPlay muted loop></video> */}
            <img src={menu_img} alt="menu_img" className='img-fluid menu_img' />
          </div>
          <div className="col overlay"></div>
          <Container>
            <Row>
              <div className="col text-center">
                <SecHedingH1 h1="Menu" p="“IF MORE OF US VALUED FOOD AND CHEER AND SONG ABOVE HOARDED GOLD, IT WOULD BE A MERRIER WORLD.” – J.R.R. TOLKIEN" />
                {/* <div className="col sec-1-btn d-flex gap-3">
                    <div className="col btn2">
                        <Buttonnn btnn={"MENU"} />
                    </div>
                    <Buttonnn btnn={"RESERVATION"} />
                </div> */}
              </div>
            </Row>
          </Container>
        </section>
        {/* section-3 */}
        <section className='home-sec-3 py-5'>
          <Container>
            <Row>
              <div className="col text-center sec-3-menu">
                <div className="col overlay2"></div>
                <div className="col ">
                  <SecHedingH2 h2="Special menu" p="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>

                <div className="row my-2">
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3">
                    <div className="col swiper-1">
                      <img src={sec_3_1} alt="sec_3_1" className='img-fluid rounded-top' />
                    </div>
                    <div className="col text-start border-white bg-light rounded-bottom">
                      <h4 className='pt-2 fs-5 px-2'>
                        <a href="#">
                          Special Eggplants Snack
                        </a>
                      </h4>
                      <p className='pt-2 px-2' style={{ fontSize: "14px" }}>
                        Marinated eggplants, special sauce, greens.
                      </p>
                      <div className="col py-3 px-2">
                        {/* ... Other content ... */}
                      </div>
                      <p className='border-bottom d-flex justify-content-between p-2'>
                        <span className='m-0' style={{ fontSize: "14px" }}>Customer Review</span>
                        <span className='justify-content-end m-0 pe-2 d-flex' style={{ fontSize: "14px" }}>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                          <i class="bi bi-star-fill px-1"></i>
                        </span>
                      </p>
                      <p className='py-2 d-flex justify-content-between p-2'>
                        <span className='m-0 fw-bold' style={{ fontSize: "21px" }}>$4.50</span>
                        <span className='m-0 fs-5'>
                          <i class="bi bi-heart pe-3"></i>
                          <i class="bi bi-cart3 pe-3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Repeat the above structure for other columns */}
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
        <Footer />
      </footer>

    </>
  )
}

export default Menu
