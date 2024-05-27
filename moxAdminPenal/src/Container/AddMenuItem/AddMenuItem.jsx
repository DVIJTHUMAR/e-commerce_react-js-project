import React from 'react'
import Header from '../../Component/Header/Header'
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { getData, productAction } from '../../Servises/actions/item.action';
import { useNavigate } from 'react-router';

function AddMenuItem() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: '',
    foodname: '',
    category: '',
    price: '',
    discount: '',
    availibilityCount: '',
    vegetarian: '',
    nonVegetarian: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(productAction(formData))
    // dispatch(getData())

    navigate('/menuitemlist');

    setFormData({
      image: '',
      foodname: '',
      category: '',
      price: '',
      discount: '',
      availibilityCount: '',
      vegetarian: '',
      nonVegetarian: '',
    });


  };

  return (
    <>
      <Header/>
      <section className=''>
        <Container>
          <Row >

            <Form onSubmit={handleSubmit} className='border my-5 p-3 ordermenu' >
              <div className="col">
                <h1 className='text-center p-3'>
                  Order Food
                </h1>
              </div>
              <div className="col-6">
              </div>
              <div className="col text-center mx-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control type="text" placeholder="image" name='image' value={formData.image} onChange={handleChange} />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control type="text" placeholder="foodname" name='foodname' value={formData.foodname} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="category" placeholder="category" name='category' value={formData.category} onChange={handleChange} />
                  </Form.Group>

                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="price" name='price' value={formData.price} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Discount</Form.Label>
                    <Form.Control type="text" name='discount' value={formData.discount} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Availibility Count</Form.Label>
                    <Form.Control type="number" name='availibilityCount' value={formData.availibilityCount} onChange={handleChange} />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Vegetarian</Form.Label>
                    <Form.Control type="text" name='vegetarian' value={formData.vegetarian} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Non-Vegetarian</Form.Label>
                    <Form.Control type="text" name='nonVegetarian' value={formData.nonVegetarian} onChange={handleChange} />
                  </Form.Group>
                </Row>

                <div className="col text-center">
                  <Button variant="primary" type="submit" className='m-0'>
                    Order
                  </Button>
                </div>
              </div>
            </Form>
          </Row>
        </Container>
        
      </section>
    </>
  )
}

export default AddMenuItem
