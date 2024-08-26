import React from 'react';
import './homepage.css';
import { RegisterButton, LoginButton} from '../../component/button/hp_login_register';


function Homepage() {
    return(
        <div >
            <div className="title">
                <h1>Plant you date</h1>
                <h2>Ready to meet your flowermate ?</h2>
            </div>
            <div className='button-container'>
                <RegisterButton />
                <LoginButton />
            </div>
        </div>
    )
}

export default Homepage;