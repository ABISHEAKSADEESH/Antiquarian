import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const navigateToPayment = () => {
    navigate("/pay");
  }

  return (
    <div className="cart-page">
      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th className="image-hd">Product</th>
                <th className="title-hd">Title</th>
                <th className="price-hd">Price</th>
                <th className="quantity-hd">Quantity</th>
                <th className="remove-hd"></th> {/* Add class here */}
              </tr>
            </thead>
            <tbody className="cart-body">
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="image-cell">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                  </td>
                  <td className="title-cell">{item.title}</td>
                  <td className="price-cell">₹{item.price}</td>
                  <td className="quantity-cell">1</td>
                  <td className="remove-cell">
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-cost">
          <div className="cart-footer">
            <h3>Total Books: {cartItems.length}</h3>
            <h2 className="total-price">Total Price: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h2>
          </div>
          <button className="continue-shopping-button" onClick={navigateToPayment}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
