import {StyledRF, StyledForm, FormError, ErrorMessageText, ErrorTitle } from './style'
import InputField from '../InputField/InputField'
import RegisterSubmitButton from '../SubmitButton/SubmitButton'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ErrorMessage } from "@hookform/error-message"
import CryptoJS from 'crypto-js'

function RegisterForm() {
    const navigate = useNavigate();
    const secretKey = "the passphrase is not secure yet";
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        // Préparation des données pour l'API Neo4j
        const userPayload = {
            username: data.username,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            password: CryptoJS.AES.encrypt(data.password, secretKey).toString(),
        };
        try {
            const response = await fetch('http://localhost:3004/api/graph/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userPayload)
            });
            if (response.ok) {
                navigate('/login');
            } else {
                const error = await response.json();
                console.log("Erreur lors de l'inscription:", error);
            }
        } catch (err) {
            console.log("Erreur réseau:", err);
        }
    };

    return (
        <StyledRF>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <InputField 
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    register={register}
                    validationRules={{ 
                        required: "Username field is required.",
                        maxLength: {
                            value: 20,
                            message: "Username needs to be less than 20 characters long."
                        },
                        minLength: {
                            value: 3,
                            message: "Username needs to be at least 3 characters long."
                        }
                    }}
                />
                <InputField 
                    label="First Name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    register={register}
                    validationRules={{ 
                        required: 'First Name field is required.',
                        maxLength: {
                            value: 20,
                            message: "First Name needs to be less than 20 characters long."
                        },
                        minLength: {
                            value: 2,
                            message: "First Name needs to be at least 3 characters long."
                        }
                    }}
                />
                <InputField 
                    label="Last Name"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    register={register}
                    validationRules={{
                        required: 'Last Name field is required',
                        maxLength: {
                            value: 20,
                            message: "Last Name needs to be less than 20 characters long."
                        },
                        minLength: {
                            value: 2,
                            message: "Last Name needs to be at least 2 characters long."
                        }
                    }}
                />
                <InputField 
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    register={register}
                    validationRules={{ 
                        required: 'Email field is required.',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: "Email format is not valid."
                        }
                    }}
                />
                <InputField 
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    register={register}
                    validationRules={{
                        required: 'Password field is required',
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
                    }}
                />
                <InputField 
                    label="Confirm Password"
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    register={register}
                    validationRules={{ 
                        required: 'Confirm Password field is required',
                        validate: value => value === getValues("password") || "The passwords do not match."
                    }}
                />
                <RegisterSubmitButton />
            </StyledForm>
            {Object.keys(errors).length > 0 && (
            <FormError className={`error-messages ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                {(Object.keys(errors).length > 0) && <ErrorTitle>Errors:</ErrorTitle>}
                {Object.keys(errors).map((field) => (
                    <ErrorMessage key={field} errors={errors} name={field} render={({ message }) => 
                        <ErrorMessageText>ⓘ {message}
                    </ErrorMessageText>} />
                ))}
            </FormError>)}
        </StyledRF>
    );
}

export default RegisterForm;