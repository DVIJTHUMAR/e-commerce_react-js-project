import React from 'react'
import './MainHeding.css'
import { Container, Row } from 'react-bootstrap'
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillTwitterSquare, AiFillGooglePlusSquare, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


function MainHeding() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(userLogOut());
    
        navigate("/login")
      }

    return (
        <>
            <Container className='main-heading px-2 py-1  text-light p-css'>
                <Row className=''>
                    <div className="d-flex justify-content-between  p-0 ">
                        <div className="col m-0 d-flex d-block col-xxl-6">
                            <div className="d-flex align-items-center m-1"> 
                                <p className='px-3' style={{ fontSize: "15px" }}>
                                    <i className="bi bi-telephone-fill"></i>
                                </p>
                                <p className='' style={{ fontSize: "14px" }}>(+100) 123 456 7890</p>
                            </div>
                            <div className="vr m-1 d-none d-md-block"></div>
                            <div className=" d-none d-md-block d-md-flex align-items-center m-1">
                                <p className='px-1' style={{ fontSize: "15px" }}>
                                    <i className="bi bi-geo-alt-fill"></i>
                                </p>
                                <p className='' style={{ fontSize: "14px" }}>2903 Avenue Z, Brooklyn, NY, USA</p>
                            </div>
                            <div className="vr m-1 d-none d-md-block"></div>
                            <div className=" d-none d-lg-block  d-lg-flex m-1 align-items-center">
                                <p className='px-1' style={{ fontSize: "15px" }}>
                                    <i className="bi bi-envelope-fill"></i>
                                </p>
                                <p className='' style={{ fontSize: "14px" }}>info@mox.com</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex m-0 justify-content-xxl-center  col-xxl-6">
                            <div className="col d-none d-xxl-flex d-xxl-block justify-content-center ">
                                <p className='align-items-center d-flex fs-3 gap-1'>
                                    <RiFacebookBoxFill />
                                    <AiFillTwitterSquare />
                                    <AiFillLinkedin />
                                    <AiFillGooglePlusSquare />
                                    <AiFillInstagram />
                                </p>
                            </div>
                            <div className="col d-flex align-items-center gap-3 justify-content-center justify-content-sm-end col-sm-6 m-lg-0 col-lg-12 justify-content-lg-center justify-content-xl-end justify-content-xxl-center col-xxl-5">
                                <p className="fs-2 d-flex align-items-center d-sm-block pe-lg-0">
                                    <LiaFlagUsaSolid />
                                </p>
                                <div className='d-flex align-items-center gap-1 m-0 d-none d-sm-none d-lg-block d-lg-flex px-lg-1 dropdwn'>
                                    <i className="bi bi-person-fill"></i>
                                    <div className="col pe-lg-3 " style={{ fontSize: "14px" }}>
                                        <p>ACCOUNT <i className="bi bi-caret-down-fill"></i></p>
                                        <ul className='list-unstyled fw-bold text-center sub-drop position-absolute'>
                                            <li className='py-2 fs-5 border m-2 px-3 rounded'>
                                                <a href="/login">LogIn</a>
                                            </li>
                                            <li className='py-2 fs-5 border m-2 px-3 rounded'>
                                                <a href="/signup">SignUp</a>
                                            </li>
                                            <li className='py-2 fs-5 border m-2 px-3 rounded'>
                                                <a href="/login" onClick={handleLogOut}>LogOut</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                <div className='col-2 pe-sm-4 d-flex d-lg-none  justify-content-end align-items-center gap-1 m-0 px-3'>
                                    <i className="bi bi-person-fill"></i>
                                    <i className="bi bi-caret-down-fill"></i>
                                </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default MainHeding
