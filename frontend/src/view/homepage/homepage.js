import React from 'react';
import './homepage.css';
import { RegisterButton, LoginButton} from '../../component/button/login_register';


function Homepage() {
    console.log('Homepage');
    return(
        <div className="night">
            <div className="title">
                <h1>Plant you date</h1>
                <h2>Ready to meet you flowermate ?</h2>
            </div>
            <div className='button-container'>
                <RegisterButton />
                <LoginButton />
            </div>
        </div>
    )
}

export default Homepage;