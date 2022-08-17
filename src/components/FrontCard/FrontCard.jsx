import React from 'react';
import "./styles.css";


const FrontCard = () => {
  return (
    <div className='front-card'>
        <div className="logo"></div>
        <div className="numbers">0000 0000 0000 0000</div>
        <div className="cardholder-name">Name Surname</div>
        <div className="exp-date">06/25</div>
    </div>
  )
}

export default FrontCard