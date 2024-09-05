import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ErrorMessage } from "@hookform/error-message"

import InputField from '../input_field'
import { LoginFormWrapper, LoginFormContainer, Error } from "./style"
import RegisterSubmitButton from '../submit_button'


var CryptoJS = require("crypto-js");


function LoginForm() {

    const navigate = useNavigate();
    const secretKey = "the passphrase is not secure yet";
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        console.log("user data", data);
        navigate('/wilderness');
    }


    return (

        <LoginFormWrapper>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
                {errors.username && <Error>ⓘ This field is required</Error>}
                <InputField 
                            label="Username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            register={register}
                            validationRules={{ 
                                required: "Username field is required.",
                            }}
                        />
                {errors.password && <Error>ⓘ This field is required</Error>}
                <InputField 
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            register={register}
                            validationRules={{
                                required: 'Password field is required',
                            }}
                        />
                <RegisterSubmitButton />
            </LoginFormContainer>
        </LoginFormWrapper>
    );
}

export default LoginForm;

//test