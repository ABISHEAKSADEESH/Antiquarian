import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country / Region *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="India">India</option>
            {/* Add more countries here if needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Street Address *</label>
          <input
            type="text"
            name="address"
            placeholder="House number and street name"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Apartment, suite, unit, etc. (optional)"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Town / City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select an option...</option>
            {/* Add states options here */}
          </select>
        </div>
        <div className="form-group">
          <label>PIN Code *</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Confirm Order</button>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          <li>Big Magic - ₹301.00 x 1</li>
          <li>Illness lesson - ₹200.00 x 1</li>
          <li><strong>Total: ₹501</strong></li>
        </ul>
        <p className="error-message">Please enter all the details</p>
        <button type="submit">CONFIRM ORDER</button>
        <button type="button" onClick={() => console.log('Back to Cart')}>BACK TO CART</button>
      </div>
    </div>
  );
}

export default Checkout;