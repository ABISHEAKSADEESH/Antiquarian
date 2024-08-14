import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import './Side.css'; // Import the CSS file for the sidebar
const Sidee = () => {
  
const navi=useNavigate('');
  return (
    <div className="sidebar">
      <h2>ANTIQUARIAN</h2>
      <div className='hue'>
      <button  onClick={()=>{navi('/caradd')}}>Add books</button>
      <button  onClick={()=>{navi('/carview')}}>View books</button>
     
      </div>
    </div>
  );
};

export default Sidee;




