const express = require('express');
const CryptoJS = require('crypto-js');


const front_secretKey = "the passphrase is not secure yet";
const back_secretKey = "the passphrase is not secure yet too"

ERROR_USERNAME_LENGHT="username lenght is between 3 and 20"
ERROR_FIRSTNAME_LENGHT="firstname lenght is between 2 and 20"
ERROR_LASTNAME_LENGHT="lastname lenght is between 2 and 20"
ERROR_PASSWORD_LENGHT="password lenght is between 8 and 20"
ERROR_PASSWORD_MATCH="confirmation password do not match"
ERROR_PASSWORD_CONTAIN="password contents is not valid"

// request.body
// request.headers

function validform(form){
    const regex = /^(?=.*\d).{6,20}$/
    if(form.username.length < 3 || form.username.length > 20)
        return {isValid: false, message : ERROR_USERNAME_LENGHT};
    if(form.first_name.length < 2 || form.first_name.length > 20)
        return {isValid: false, message : ERROR_FIRSTNAME_LENGHT};
    if(form.last_name.length < 2 || form.last_name.length > 20)
        return {isValid: false, message : ERROR_LASTNAME_LENGHT};
    if(form.password.length < 8 || form.password.length > 20)
        return {isValid: false, message : ERROR_PASSWORD_LENGHT};
    if(form.password !== form.confirm_password)
        return {isValid: false, message : ERROR_PASSWORD_MATCH};
    if (!(regex.test(form.password)) || form.password.includes('password'))
        return {isValid: false, message : ERROR_PASSWORD_CONTAIN};
    return {isValid: true, message : ''};
}


const create_user = (request, results) =>{
    console.log("CREATING USER");
    console.log('body data : ', request.body);

    var password = CryptoJS.AES.decrypt(request.body.password, front_secretKey).toString(CryptoJS.enc.Utf8);
    var confirm_password = CryptoJS.AES.decrypt(request.body.confirm_password, front_secretKey).toString(CryptoJS.enc.Utf8);

    const userForm = {
        username: request.body.username,
        email: request.body.email,
        password: password,
        confirm_password:confirm_password,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
    }

    const validationResult = validform(userForm)
    if (!validationResult.isValid)
        return results.status(400).json({error : validationResult.message})
    //CREATE USER IN BDD || check if he existe
    const token = CryptoJS.AES.encrypt("id", back_secretKey).toString();
    return results.status(201).json({token : token})
}

const connect_user = (request, results) => {
    console.log("CONNECTING USER");
    console.log('body data : ', request.body);

    var password = CryptoJS.AES.decrypt(request.body.password, front_secretKey).toString(CryptoJS.enc.Utf8);
    

}