import React, { useEffect } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getData } from '../../Servises/Actions/item.action';

function AddToCart() {
    const { item } = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const handleEdit = (itemId) => {
        // Add your logic for handling edit
    };

    const handleDelete = (itemId) => {
        // Add your logic for handling delete
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <div className="col-10 mt-5 cart__container">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr className='text-center text-uppercase'>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>food name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Availibility Count</th>
                                        <th>Vegetarian</th>
                                        <th>Non-Vegetarian</th>
                                        <th>Buttons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-uppercase '>
                                        <td>1</td>
                                        <td><img className='img-fluid' style={{ width: "150px" }} src={item.image} alt="img" /></td>
                                        <td>{item.foodname}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price}</td>
                                        <td>{item.discount}</td>
                                        <td>{item.availibilityCount}</td>
                                        <td>{item.vegetarian}</td>
                                        <td>{item.nonVegetarian}</td>
                                        <td className='text-center'>
                                            <Button variant="info mx-3" onClick={() => handleBuy(item.id)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </Button>
                                            <Button variant="danger mx-3" onClick={() => handleDelete(item.id)}>
                                                <i className="bi bi-x-circle"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AddToCart;
