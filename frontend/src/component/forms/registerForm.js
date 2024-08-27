import React from "react";
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
var CryptoJS = require("crypto-js");


// put in env file
const secretKey = "the passphrase is not secure yet";

        // Decrypt
        // var bytes  = CryptoJS.AES.decrypt(password1, secretKey);
        // var originalText = bytes.toString(CryptoJS.enc.Utf8);

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        var password1 = CryptoJS.AES.encrypt(data.password, secretKey).toString();
    };

    return (
        <div className="register_form">

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="first">
                    <h3>Username</h3>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        {...register("username", { 
                                required: "Username field is required.",
                                maxLength: {
                                    value: 20,
                                    message: "Username needs to be less than 20 characters long."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username needs to be at least 3 characters long."
                                }
                            })}
                    />
                </label>
                <label>
                    <h3>First Name</h3>
                    <input 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        {...register("first_name", { 
                                required: 'First Name field is required.',
                                maxLength: {
                                    value: 20,
                                    message: "First Name needs to be less than 20 characters long."
                                },
                                minLength: {
                                    value: 2,
                                    message: "First Name needs to be at least 3 characters long."
                                }
                        })}
                    />
                </label>
                <label>
                    <h3>Last Name</h3>
                    <input 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        {...register("last_name", {
                                required: 'Last Name field is required',
                                maxLength: {
                                    value: 20,
                                    message: "Last Name needs to be less than 20 characters long."
                                },
                                minLength: {
                                    value: 2,
                                    message: "Last Name needs to be at least 2 characters long."
                                }
                        })}
                    />
                </label>
                <label>
                    <h3>Email</h3>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Email" 
                        {...register("email", { 
                                required: 'Email field is required.',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: "Email format is not valid."
                                }
                        })}
                    />
                </label>
                <label>
                    <h3>Password</h3>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        {...register("password", {
                            required: 'Password field is requiered',
                            maxLength: {
                                value: 20,
                                message: "Password needs to be less than 20 characters long."
                            },
                            minLength: {
                                value: 6,
                                message: "Password needs to be at least 6 characters long."
                            },
                            pattern: {
                                value: /^(?=.*\d).{6,20}$/,
                                message: "Password must contain at least one number."
                            }
                        })}
                    />
                </label>
                <label>
                    <h3>Confirm Password</h3>
                    <input 
                        type="password" 
                        name="confirm_password" 
                        placeholder="Confirm Password" 
                        {...register("confirm_password", { required: 'Confirm Password field is required.',
                            validate: value => value === getValues("password") || "The passwords do not match."
                        })}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
            <div className={`error-messages ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                {(Object.keys(errors).length > 0) && <h3>Errors:</h3>}
                {Object.keys(errors).map((field) => (
                    <ErrorMessage key={field} errors={errors} name={field} render={({ message }) => <p>ⓘ    {message}</p>} />
                ))}
            </div>
        </div>
    );
};

export default RegisterForm;