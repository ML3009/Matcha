import React from "react";
import RegisterFormButton from "../button/registerForm_validation";

const RegisterForm = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="register_form">
            <form>
                <label className="first">
                    <h3>Username</h3>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>First Name</h3>
                    <input 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Last Name</h3>
                    <input 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Email</h3>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Password</h3>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Confirm Password</h3>
                    <input 
                        type="password" 
                        name="confirm_password" 
                        placeholder="Confirm Password" 
                        value={formData.confirm_password}
                        onChange={handleChange}
                    />
                </label>
                <RegisterFormButton data={formData}/>
            </form>
        </div>
    );
};

export default RegisterForm;