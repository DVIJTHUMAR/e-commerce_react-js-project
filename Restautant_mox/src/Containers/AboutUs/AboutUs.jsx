import React from 'react'

import about_bg from '../../Images/aboutUs/about.jpg'
import { Container, Row } from 'react-bootstrap'
import SecHedingH1 from '../../Components/SecHeding/SecHedingH1/SecHedingH1'
import SecHedingH2 from '../../Components/SecHeding/SecHedingH2/SecHedingH2'
import about_1 from '../../Images/aboutUs/about-1.jpg'
import about_2 from '../../Images/aboutUs/about-2.jpg'

import sec_11_mobail from '../../Images/homePage/sec-11.png'
import sec_11_google from '../../Images/homePage/sec-11-google4.png'
import sec_11_apple from '../../Images/homePage/sec-11-apple.png'

import sec12_1 from '../../Images/homePage/sec12_1.png'
import sec12_2 from '../../Images/homePage/sec12_2.png'
import sec12_3 from '../../Images/homePage/sec12_3.png'
import sec12_4 from '../../Images/homePage/sec12_4.png'
import sec12_5 from '../../Images/homePage/sec12_5.png'
import sec_12_img_b from '../../Images/homePage/sec12_img_b.png'
import Buttonnn from '../../Components/Button/Button'
import { Telephone } from 'react-bootstrap-icons'
import MySwiper_4 from '../../Components/Swiper_4/Swiper_4'
import { MdOutlineFastfood } from 'react-icons/md'
import MainHeding from '../../Components/MainHeding/MainHeding'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function AboutUs() {
  return (
    <>
      <header>
        <MainHeding/>
        <Header/>
      </header>
      <main>
        {/* section-1 */}
      <section className='home-sec-1 menu-sec-1'>
        <div className="col">
          <img src={about_bg} alt="menu_img" className='img-fluid menu_img' />
        </div>
        <div className="col overlay"></div>
        <Container>
          <Row>
            <div className="col text-center">
              <SecHedingH1 h1="About Us" p="FURTHER INFORMATION ABOUT OUR TEAM AND OUR RESTAURANT" />
            </div>
          </Row>
        </Container>
      </section>
      {/* section-2 */}
      <section className='py-5'>
        <Container>
          <Row>
            <div className="col">
              <div className="col text-center pb-5">
                <SecHedingH2 h2="The History" p="Quisque pretium fringilla dolor, ac feugiat dui blandit quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris orci neque, rhoncus id augue at, blandit pretium est. Phasellus eget enim quis neque luctus porta. Aenean lacinia, nibh nec sagittis dictum, nisl mauris maximus eros, at elementum ipsum orci sit amet nunc. Nam enim diam, euismod in tincidunt in, euismod nec ligula. Aliquam erat volutpat. Integer vulputate lacus a volutpat aliquet. Mauris suscipit sollicitudin purus, et congue lectus dignissim vel. Vestibulum purus arcu, eleifend a odio non, bibendum dictum lectus. Nam vulputate accumsan quam facilisis aliquet. Cras accumsan et elit a consequat." />
              </div>
              <div className="col d-flex flex-wrap">
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2">
                  <img src={about_1} alt="about_1" className='img-fluid' />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2">
                  <SecHedingH2 h2="Our Story" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus ante ut arcu iaculis fringilla. Vivamus bibendum leo massa, non pellentesque odio tincidunt id. Mauris id ornare mi. Fusce eu est in nisl tincidunt aliquet quis fringilla nulla. Maecenas viverra dictum eros sit amet feugiat. Ut ex tortor, ultrices vel tempus vitae, gravida quis velit. Donec mattis vehicula nulla, sed maximus ante pulvinar ullamcorper. Cras maximus facilisis suscipit. Quisque fermentum metus et nunc fermentum laoreet." p1="Suspendisse ultricies dapibus viverra. Duis id erat a nunc placerat bibendum nec quis elit. Suspendisse non suscipit nibh. Maecenas laoreet leo ac erat bibendum pulvinar. Ut sagittis pellentesque sapien non hendrerit. Aenean lacinia felis sit amet sem malesuada, sed pellentesque tortor consequat. Vivamus non congue nulla, feugiat volutpat ante. Donec ultricies nisl sed leo tincidunt, a consequat nibh ornare. Vivamus ante quam, rhoncus vitae lacinia convallis, rhoncus nec neque. Aliquam ut lectus at justo tristique tristique. Vestibulum ex sapien, imperdiet sit amet tempus eget, egestas sit amet leo. Suspendisse potenti." />
                </div>
              </div>

              <div className="col d-flex flex-wrap">
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2">
                  <SecHedingH2 h2="Since 1987" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus ante ut arcu iaculis fringilla. Vivamus bibendum leo massa, non pellentesque odio tincidunt id. Mauris id ornare mi. Fusce eu est in nisl tincidunt aliquet quis fringilla nulla. Maecenas viverra dictum eros sit amet feugiat. Ut ex tortor, ultrices vel tempus vitae, gravida quis velit. Donec mattis vehicula nulla, sed maximus ante pulvinar ullamcorper. Cras maximus facilisis suscipit. Quisque fermentum metus et nunc fermentum laoreet." p1="Suspendisse ultricies dapibus viverra. Duis id erat a nunc placerat bibendum nec quis elit. Suspendisse non suscipit nibh. Maecenas laoreet leo ac erat bibendum pulvinar. Ut sagittis pellentesque sapien non hendrerit. Aenean lacinia felis sit amet sem malesuada, sed pellentesque tortor consequat. Vivamus non congue nulla, feugiat volutpat ante. Donec ultricies nisl sed leo tincidunt, a consequat nibh ornare. Vivamus ante quam, rhoncus vitae lacinia convallis, rhoncus nec neque. Aliquam ut lectus at justo tristique tristique. Vestibulum ex sapien, imperdiet sit amet tempus eget, egestas sit amet leo. Suspendisse potenti." />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2">
                  <img src={about_2} alt="about_2" className='img-fluid' />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* section-3 */}
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
      {/* sectioon-4 */}
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
              {/* <div className="col row d-flex align-items-center text-white position-relative py-2" style={{ background: "#c62828" }}>
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
              </div> */}
            </div>
          </Row>
        </Container>
      </section>
      {/* sectiom-5 */}
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
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default AboutUs
