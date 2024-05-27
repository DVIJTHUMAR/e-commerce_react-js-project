import React from 'react'
import Header from '../../Component/Header/Header'

import { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteData, getData, singleData } from '../../Servises/actions/item.action';

function MenuItemList() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items } = useSelector(state => state.itemReducer)

  useEffect(() => {

    dispatch(getData());

  }, [dispatch])

  const handleEdit = async (id) => {

    await dispatch(singleData(id));

    navigate("/edititem")
  }

  const handleDelete = (id) => {

    dispatch(deleteData(id));

  }

  return (
    <>
      <Header />

      <Container className='p-4'>
        <Row>
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
              {
                items.map((item, index) => (
                  <tr key={index} className='text-uppercase '>
                    <td>{index + 1}</td>
                    <td><img className='img-fluid' style={{ width: "150px" }} src={item.image} alt="img" /></td>
                    <td>{item.foodname}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{item.availibilityCount}</td>
                    <td>{item.vegetarian}</td>
                    <td>{item.nonVegetarian}</td>
                    <td className='text-center'>
                      <Button variant="info mx-3" onClick={() => handleEdit(item.id)}>
                        <i class="bi bi-pencil-square"></i>
                      </Button>

                      <Button variant="danger mx-3" onClick={() => handleDelete(item.id)}>
                        <i class="bi bi-x-circle"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Row>
      </Container>



    </>
  )
}

export default MenuItemList
