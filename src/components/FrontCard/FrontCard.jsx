import React from 'react';
import "./styles.css";


const FrontCard = ({formData}) => {

  const {name, number, month, year} = formData;

  return (
    <div className='front-card'>
        <div className="logo"></div>
        <div className="numbers">{number}</div>
        <div className="cardholder-name">{name}</div>
        <div className="exp-date">{month}/{year}</div>
    </div>
  )
}

export default FrontCard