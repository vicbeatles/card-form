import React from 'react';
import "./styles.css";

const SubmitMessage = () => {

    return (
        <div className='message-container'>
            <div className='check-image'></div>
            <div className='message-title'>THANK YOU!</div>
            <div className='message-text'>We've added your card details.</div>
            <div className='message-button'><button>Continue</button></div>
        </div>

    )
}

export default SubmitMessage;