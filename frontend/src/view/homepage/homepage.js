import React from 'react';
import './homepage.css';
import { handleLoginClick, handleRegisterClick} from './bouton_event';


function Homepage() {
    console.log('Homepage');
    return(
        <div className="night">
            <div className="title">
                <h1>Plant you date</h1>
                <h2>Ready to meet you flowermate ?</h2>
            </div>
            <div className='button-container'>
                <button className='register' onClick={handleRegisterClick}>Register</button>
                <button className='login' onClick={handleLoginClick}>Log in</button>
            </div>
        </div>
    )
}

export default Homepage;