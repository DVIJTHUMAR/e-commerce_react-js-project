import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getData, singleData } from '../../Servises/Actions/item.action';
import { useNavigate } from 'react-router';
import Buttonnn from '../../Components/Button/Button';
import SecHedingH2 from '../../Components/SecHeding/SecHedingH2/SecHedingH2';
import Header from '../../Components/Header/Header';
import MainHeding from '../../Components/MainHeding/MainHeding';
import Footer from '../../Components/Footer/Footer';



function Order() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items } = useSelector(state => state.itemReducer)

    useEffect(() => {

        dispatch(getData());

    }, [dispatch])

    const handleAddToCart = async (id) => {
        await dispatch(singleData(id))

        navigate("/addtocart")
    }

    return (
        <>
            <header>
                <MainHeding />
                <Header />
            </header>
            <main>
                <section className='py-50' style={{ paddingTop: "100px" }}>
                    <Container>
                        <Row>
                            <div className="col py-50">
                                <div className="col about-heding text-center py-2 mb-4 bg-success">
                                    <SecHedingH2 h2="MENU CARD" p="Good Food Helthy Food !!!" />
                                </div>
                                <div className="col d-flex py-5 flex-wrap gap-4">
                                    {
                                        items.map((item, index) => (
                                            <div key={index} className="card m-3" style={{ width: "18rem" }}>
                                                <img src={item.image} className="card-img-top" alt="card-img-top" />
                                                <h2 className="card-title text-uppercase border-bottom py-2">{item.foodname}</h2>
                                                <div className="card-body m-0 border-bottom border-top bg-secondary-subtle">
                                                    <h5 className="card-title"><span className='fw-bold'>Category :</span> {item.category}</h5>
                                                    <h5 className="card-title"> <span className='fw-bold'>Price   :</span> {item.price}</h5>
                                                    <h5 className="card-title"><span className='fw-bold'>Discount :</span> {item.discount}</h5>
                                                    <h5 className="card-title"><span className='fw-bold'>Availibility Count :</span> {item.availibilityCount}</h5>
                                                    <h5 className="card-title"><span className='fw-bold'>Vegetarian :</span> {item.vegetarian}</h5>
                                                    <h5 className="card-title"><span className='fw-bold'>Non-Vegetarian :</span> {item.nonVegetarian}</h5>
                                                </div>
                                                <div className="col d-flex gap-5 py-2">
                                                    <Buttonnn btnn="BUY" />
                                                    <div className="addcartbtn mx-3 ms-5" onClick={() => handleAddToCart(item.id)} >
                                                        <Buttonnn btnn="Add To Cart" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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

export default Order
