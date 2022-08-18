import React from 'react'
import "./styles.css"

const RearCard = ({formData}) => {

  const {cvv} = formData;

  return (
    <div className='rear-card'>
        <div className='cvv'>{cvv}</div>
    </div>
  )
}

export default RearCard