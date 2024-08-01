import React from "react";

const RegisterFormButton = ({data}) => {
    return (
        <button type="submit" onClick={
            (e) => {
                e.preventDefault();
                alert("Username: " + data.username 
                    + "\nFirst Name: " + data.first_name 
                    + "\nLast Name: " + data.last_name 
                    + "\nEmail: " + data.email 
                    + "\nPassword: " + data.password 
                    + "\nConfirm Password: " + data.confirm_password);
            }
        }>Register</button>
    );
};

export default RegisterFormButton;