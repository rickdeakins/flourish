import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

