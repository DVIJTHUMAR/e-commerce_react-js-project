import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import SecHedingH1 from '../../Components/SecHeding/SecHedingH1/SecHedingH1'

import contect_img from '../../Images/contect/contact.jpg'
import Buttonnn from '../../Components/Button/Button'

import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

import contect_1 from '../../Images/contect/contect-1.jpg'
import SecHedingH2 from '../../Components/SecHeding/SecHedingH2/SecHedingH2'

import sec_11_mobail from '../../Images/homePage/sec-11.png'
import sec_11_google from '../../Images/homePage/sec-11-google4.png'
import sec_11_apple from '../../Images/homePage/sec-11-apple.png'
import Header from '../../Components/Header/Header'
import MainHeding from '../../Components/MainHeding/MainHeding'
import Footer from '../../Components/Footer/Footer'

function Contact() {

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
        <Header/>
      </header>
      <main>
        {/* section-1 */}
      <section className='home-sec-1 menu-sec-1'>
        <div className="col">
          {/* <video className='' src='http://themeseason.com/data/videos/restaurant.mp4' autoPlay muted loop></video> */}
          <img src={contect_img} alt="menu_img" className='img-fluid menu_img' />
        </div>
        <div className="col overlay"></div>
        <Container>
          <Row>
            <div className="col text-center">
              <SecHedingH1 h1="Contact Us" p="GOT A QUESTION? WE'LL GIVE YOU STRAIGHT ANSWER" />
            </div>
          </Row>
        </Container>
      </section>
      {/* section-2 */}
      <section className='py-5 contact-sec-2'>
        <Container>
          <Row>
            <div className="col">
              <div className="row d-flex mb-5 my-3">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center">
                  <div className="col">
                    <i class="bi bi-house-fill"></i>
                  </div>
                  <h6>ADDRESS :</h6>
                  <p>2903 Avenue Z, Brooklyn, New York City</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center">
                  <div className="col">
                    <i class="bi bi-telephone-fill"></i>
                  </div>
                  <h6>PHONES :</h6>
                  <p>(212) 457-2309</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center">
                  <div className="col">
                    <i class="bi bi-envelope-fill"></i>
                  </div>
                  <h6>E-MAIL :</h6>
                  <p>contact@mox.com</p>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                    <div className="text-center mt-5">
                      <Buttonnn btnn="MAKE RESERVATION" />
                    </div>
                  </Form>
                  </Form>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                  <img src={contect_1} alt="contect_1" className='img-fluid' />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      {/* section-3 */}
      <section className='py-5 contact-sec-2'>
        <Container>
          <Row>
            <div className="col pt-3 col-sm-6 col-md-8 col-lg-10 col-xl-12 col-xxl-12">
              <iframe className='ifram' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.47071409418!2d72.88699274999999!3d21.2172638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704913235597!5m2!1sen!2sin" ></iframe>
            </div>
          </Row>
        </Container>
      </section>
      {/* sectiom-4 */}
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

export default Contact
