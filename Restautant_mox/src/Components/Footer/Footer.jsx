import React from 'react'
import './Footer.css'
import { Container, Row } from 'react-bootstrap'
import SecHedingH2 from '../SecHeding/SecHedingH2/SecHedingH2'
import Button from '../Button/Button'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiFillGooglePlusSquare, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'

function Footer() {
  return (
    <>
      <section className='footer text-white'>
        <div className="footer-overlay"></div>
        <Container>
          <Row className=''>
            <div className="col footer-content p-5">
              <div className="col d-flex justify-content-center">
                <div className="row py-5 ">
                  <div className="col-2 pb-3 text-center" style={{ width: "500px" }} >
                    <h3 style={{ fontSize: "40px" }}>
                      Subscribe our Newsletter
                    </h3>
                    <p style={{ fontSize: "16px", width: "500px" }}>
                      Stay up to date with our latest news and properties
                    </p>
                  </div>
                  <div className="col d-flex align-items-center px-5 px-sm-0 px-md-5 mx-sm-0 mx-sm-5 mx-5 bordr-in">
                    <input type="text" name="subscribe" placeholder='your email address.....' className='bg-transparent p-4 text-center border-end-0 rounded-start' style={{ width: "400px" }} />
                    <div className="col btn-footr">
                      <Button btnn="SUBCRIBE" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col d-flex-none bordr d-lg-flex py-5">
                <div className="col d-md-flex">
                  <div className="col p-2 px-4">
                    <svg className='pt-3' version="1.0" xmlns="http://www.w3.org/2000/svg" width="75%" viewBox="0 0 364.000000 122.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1744 1199 c-216 -27 -411 -184 -484 -392 -79 -224 -25 -460 146 -631 110 -111 254 -169 419 -169 161 0 298 58 414 174 236 236 237 605 2 847 -122 125 -318 193 -497 171z m273 -204 c254 -125 320 -465 132 -679 -136 -154 -339 -193 -525 -101 -168 83 -269 278 -236 457 55 298 360 455 629 323z"></path><path d="M1713 986 c-105 -34 -204 -123 -251 -224 -24 -50 -27 -69 -27 -157 0 -91 3 -106 31 -165 39 -83 111 -155 194 -194 58 -28 75 -31 160 -31 86 0 101 3 162 32 84 40 151 107 192 193 28 59 31 74 31 165 0 91 -3 106 -31 165 -38 81 -108 151 -190 191 -51 25 -78 32 -146 35 -54 3 -98 -1 -125 -10z"></path><path d="M3360 1193 c-98 -34 -185 -118 -220 -210 -22 -58 -26 -136 -10 -178
      16 -42 -26 -101 -117 -163 -41 -29 -46 -28 -92 13 -51 46 -72 92 -82 181 -4
      40 -15 86 -23 102 -12 23 -141 132 -304 255 -9 7 -17 6 -25 -2 -9 -10 -3 -20
      28 -49 22 -20 89 -82 149 -139 103 -97 108 -105 93 -121 -16 -15 -26 -7 -162
      128 -115 115 -147 142 -157 132 -10 -10 17 -42 132 -157 126 -127 142 -146
      130 -160 -12 -14 -30 0 -160 130 -99 99 -150 143 -155 135 -5 -8 43 -63 136
      -156 138 -138 143 -144 125 -161 -17 -17 -23 -12 -160 131 -114 119 -144 146
      -153 135 -9 -11 14 -46 107 -164 125 -157 158 -185 222 -185 77 0 178 -50 215
      -106 l16 -26 -221 -221 c-196 -196 -222 -226 -222 -254 0 -35 38 -73 73 -73
      14 0 95 74 237 215 118 118 220 215 225 215 6 0 95 -88 200 -196 179 -186 233
      -234 263 -234 21 0 62 47 62 72 0 15 -66 88 -225 248 l-226 226 29 40 c37 51
      98 104 120 104 9 0 37 -5 61 -11 86 -19 226 38 290 120 101 128 105 260 11
      345 -61 55 -129 68 -210 39z m-45 -119 c-51 -51 -115 -156 -115 -191 0 -6 -5
      -15 -12 -19 -18 -11 -3 97 20 142 11 22 31 49 44 61 27 26 110 74 117 68 2 -3
      -22 -30 -54 -61z"></path><path d="M110 1170 c-60 -85 -101 -300 -110 -582 0 -3 15 -24 33 -46 l34 -40
      -5 -224 c-5 -247 -2 -268 46 -268 16 0 33 5 40 12 9 9 12 133 13 493 l0 480
      20 -55 c21 -60 126 -277 156 -323 12 -19 35 -35 68 -45 42 -14 53 -24 69 -57
      10 -22 28 -59 39 -82 l21 -41 -52 -90 c-57 -99 -62 -124 -31 -146 33 -23 60
      -6 100 63 20 35 39 62 43 62 4 0 25 -27 47 -61 43 -68 59 -78 95 -62 36 17 30
      50 -28 147 -51 86 -51 87 -36 118 9 18 22 49 28 69 13 42 47 74 89 83 16 3 36
      14 44 23 25 28 134 254 161 333 l25 74 1 -485 c0 -364 3 -489 12 -498 7 -7 24
      -12 40 -12 48 0 51 21 46 268 l-5 224 34 40 c18 22 33 43 33 46 -9 282 -50
      497 -110 582 -45 63 -48 59 -266 -316 -110 -190 -205 -346 -210 -346 -4 0
                  -102 154 -216 343 -144 240 -213 345 -227 347 -12 2 -27 -8 -41 -28z"></path></g></svg>

                    <p className='py-4 fs-6 col' style={{ color: "#ffffffb3" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem inventore tempore repellendus voluptatum ipsam aut, nisi rem fugit ad vel nihil saepe, quas dolorum animi! Ea excepturi optio dolorum.
                    </p>
                    <p className='pb-3 fs-6'>
                      <i class="bi bi-geo-alt-fill pe-2"></i>  2903 Avenue Z, Brooklyn, NY
                    </p>
                    <p className='pb-3 fs-6'>
                      <i class="bi bi-telephone-fill pe-2"></i>  (+100) 123 456 7890
                    </p>
                    <p className='pb-3 fs-6'>
                      <i class="bi bi-envelope pe-2"></i>  info@mox.com
                    </p >
                    <p className='pb-3 fs-6'>
                      <i class="bi bi-clock pe-2"></i>Mon - Sun / 9:00AM - 8:00PM
                    </p>
                    <div className="col d-xl-flex d-xl-block mt-4">
                      <p className='align-items-center d-flex fs-2 gap-1 text-secondary'>
                        <RiFacebookBoxFill />
                        <AiFillTwitterSquare />
                        <AiFillLinkedin />
                        <AiFillGooglePlusSquare />
                        <AiFillInstagram />
                      </p>
                    </div>
                  </div>
                  <div className="col p-2 px-4">
                    <h1 className='pt-3 '>
                      Feedback
                    </h1>
                    <p className='mb-4 fs-6' style={{ color: "#ffffffb3", }}>
                      We want your feedback about everything
                    </p>
                    <form action="">
                      <div className="col bordr-in my-5 py-4">
                        <input type="email" name="subscribe" placeholder='Email' className='bg-transparent p-4 rounded' style={{ width: "100%" }} required />
                      </div>
                      <div className="col bordr-in mb-3">
                        <textarea rows={7} cols={48} placeholder='Message for us*' className='bg-transparent p-2 rounded' style={{ width: "100%" }} required />
                      </div>
                      <div className="col text-center my-4 py-3">
                        <Button btnn="SUBMIT" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col px-3">
                  <div className="col p-2">
                    <h2 className='fs-1 mb-3 pt-3'>
                      Our location
                    </h2>
                    <div className="col pt-3">
                      <iframe className='ifram' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.47071409418!2d72.88699274999999!3d21.2172638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704913235597!5m2!1sen!2sin" ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pt-3 d-lg-flex justify-content-between" style={{ color: "#FFFFFFB3" }}>
                <p>
                  Copyright © 2023 All Rights Reserved
                </p>
                <p>
                  Designed & Developed by
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
