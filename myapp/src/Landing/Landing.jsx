import { Link } from 'react-router-dom';
import './Landing.css';
import icon from './icon.png';

export default function Landing() {
  return (
    <div className="lan-all">
      <div className="lan-msg">
        <div className="lan-icon">
          <img src={icon} alt="Landing Icon" />
        </div>
        <div className="lan-content">
          <p>Please Login to get Better Experience!</p>
          <Link to="home">
            <button className="lan-btn">Search some intresting song ➔</button>
          </Link>
        </div>
      </div>
      <div className="lan-footer">
        <h2>Antiquarian - Best website for buying and selling books</h2>
        <h3>Welcome</h3>
        <p>The second-hand book store aims to create an eco-friendly and budget-conscious solution for book enthusiasts,
          students, and avid readers. By providing a platform for buying and selling used books, the store encourages the
          reuse of books, thus contributing to environmental sustainability. The store's inventory will include a diverse
          range of genres, catering to various age groups and interests, ensuring that there is something for everyone.
          The second-hand book store is dedicated to fostering a love for reading while promoting sustainable living.
          By making books more accessible and affordable, the store aims to support education, spread knowledge, and build
          a community of environmentally-conscious readers.</p>
      </div>
    </div>
  );
}
