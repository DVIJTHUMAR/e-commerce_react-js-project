import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userLogOut } from '../../Servises/actions/admin.action';

const Header = ({ name, ...props }) => {
    const { user } = useSelector(state => state.adminReducer);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(userLogOut());

        navigate("/")
    }

    const handleDeshboard = () => {
        navigate('/deshboard')
    }
    const handleMenuItemList = () => {
        navigate('/menuitemlist')
    }
    const handleAddMenuItem = () => {
        navigate('/addmenuitem')
    }
    const handleUserData = () => {
        navigate('/userdata')
    }
    const handleReservation = () => {
        navigate('/reservation')
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-dark px-3 py-0 ">
                    <a className="navbar-brand" href="#">
                        <div className="logo me-5">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="95.000000pt" viewBox="0 0 364.000000 122.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1744 1199 c-216 -27 -411 -184 -484 -392 -79 -224 -25 -460 146 -631 110 -111 254 -169 419 -169 161 0 298 58 414 174 236 236 237 605 2 847 -122 125 -318 193 -497 171z m273 -204 c254 -125 320 -465 132 -679 -136 -154 -339 -193 -525 -101 -168 83 -269 278 -236 457 55 298 360 455 629 323z"></path><path d="M1713 986 c-105 -34 -204 -123 -251 -224 -24 -50 -27 -69 -27 -157 0 -91 3 -106 31 -165 39 -83 111 -155 194 -194 58 -28 75 -31 160 -31 86 0 101 3 162 32 84 40 151 107 192 193 28 59 31 74 31 165 0 91 -3 106 -31 165 -38 81 -108 151 -190 191 -51 25 -78 32 -146 35 -54 3 -98 -1 -125 -10z"></path><path d="M3360 1193 c-98 -34 -185 -118 -220 -210 -22 -58 -26 -136 -10 -178
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
      -102 154 -216 343 -144 240 -213 345 -227 347 -12 2 -27 -8 -41 -28z"></path></g></svg></div>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav ml-auto ms-5 ps-5">
                            <li className="nav-item mx-3 ">
                                <Button variant="primary" onClick={toggleShow} className="me-2  bg-transparent fs-3 p-1 px-3 border-0">
                                    <i className="bi bi-list fs-2"></i>
                                </Button>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link  fs-2 text-white" href="/deshboard">
                                    <i className="bi bi-house-heart-fill"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-1 text-white" href="#">
                                    <Button className='bg-transparent fs-3 p-1 px-3 border-0' onClick={handleLogOut}>
                                        <i className="bi bi-box-arrow-right"></i>
                                    </Button>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className="col">
                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header className='bg-dark text-white' closeButton>
                            <Offcanvas.Title>
                                PROFILE
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='list col' >

                            <div className="col">
                                <Card className='col p-2 mx-2 text-center'>
                                    <div className="col ">
                                        <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=" alt="img" className='img-fluid' />
                                    </div>
                                    <div className="col my-2">
                                        <h5>
                                            Name : Alina Joy<br />
                                        </h5>
                                        <p>Email : alina56@gmail.com</p><br />
                                    </div>
                                </Card>
                            </div>

                            <ul className='list-unstyled list text-center'>
                                <li>
                                    <a onClick={handleDeshboard}>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleMenuItemList}>
                                        Menu Item List
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleAddMenuItem}>
                                        Add Menu Item
                                    </a>
                                </li>
                                {/* <li>
                                    <a onClick={handleUserData}>
                                        User Data
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a onClick={handleReservation}>
                                        Reservation
                                    </a>
                                </li> */}
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    );
};

export default Header;
