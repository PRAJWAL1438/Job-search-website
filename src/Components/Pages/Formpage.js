import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formpage.css'

const Formpage = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    MobileNumber: '',
    Graudation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className='ParentCard'>
    <Form  className='Card'>
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </Form.Group>
    <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="MobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="Number"
          name="MobileNumber"
          value={formData.MobileNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="Graudation">
        <Form.Label>Graudation</Form.Label>
        <Form.Control
          type="Number"
          name="Graudation"
          value={formData.Graudation}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button className='Button' variant="primary" type="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Formpage;
