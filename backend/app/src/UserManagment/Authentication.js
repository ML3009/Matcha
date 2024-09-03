const express = require('express');
const CryptoJS = require('crypto-js');


const front_secretKey = "the passphrase is not secure yet";
const back_secretKey = "the passphrase is not secure yet too"
const db_secretKey = "the passphrase is not secure yet too"

ERROR_USERNAME_LENGHT="username lenght is between 3 and 20"
ERROR_FIRSTNAME_LENGHT="firstname lenght is between 2 and 20"
ERROR_LASTNAME_LENGHT="lastname lenght is between 2 and 20"
ERROR_EMAIL_FORMAT="email format is not valid"
ERROR_PASSWORD_LENGHT="password lenght is between 8 and 20"
ERROR_PASSWORD_MATCH="confirmation password do not match"
ERROR_PASSWORD_CONTAIN="password contents is not valid"


function validform(form){

    const password_regex = /^(?=.*\d).{6,20}$/
    const email_regex = /\S+@\S+\.\S+/
    if(form.username.length < 3 || form.username.length > 20)
        return {isValid: false, message : ERROR_USERNAME_LENGHT};
    if(form.first_name.length < 2 || form.first_name.length > 20)
        return {isValid: false, message : ERROR_FIRSTNAME_LENGHT};
    if(form.last_name.length < 2 || form.last_name.length > 20)
        return {isValid: false, message : ERROR_LASTNAME_LENGHT};
    if(!(email_regex.test(form.email)))
        return {isValid: false, message : ERROR_EMAIL_FORMAT};
    if(form.password.length < 8 || form.password.length > 20)
        return {isValid: false, message : ERROR_PASSWORD_LENGHT};
    if(form.password !== form.confirm_password)
        return {isValid: false, message : ERROR_PASSWORD_MATCH};
    if (!(password_regex.test(form.password)) || form.password.includes('password'))
        return {isValid: false, message : ERROR_PASSWORD_CONTAIN};
    return {isValid: true, message : ''};
}


const create_user = async (request, results) =>{
    console.log("CREATING USER");
    console.log('body data : ', request.body);

    const requiredFields = ['username', 'email', 'password', 'confirm_password', 'first_name', 'last_name'];
    for (const field of requiredFields) {
        if (!request.body[field]) {
            return results.status(400).json({error : `missing ${field} in body`});
        }
    }
    
    var password  = CryptoJS.AES.decrypt(request.body.password, front_secretKey).toString(CryptoJS.enc.Utf8);
    var confirm_password = CryptoJS.AES.decrypt(request.body.confirm_password, front_secretKey).toString(CryptoJS.enc.Utf8);

    const userForm = {
        username: request.body.username,
        email: request.body.email,
        password: password, // use password instead of body password
        confirm_password: confirm_password, // use confirm_password instead of body confirm_password
        first_name: request.body.first_name,
        last_name: request.body.last_name,
    }

    const validationResult = validform(userForm)
    if (!validationResult.isValid)
        return results.status(400).json({error : validationResult.message})
    try {
        userForm.password = CryptoJS.AES.encrypt(userForm.password, db_secretKey).toString();
        userForm.confirm_password = CryptoJS.AES.encrypt(userForm.confirm_password, db_secretKey).toString();
        const creation_result = await createUser_db(userForm);
        console.log("result after db", creation_result);
        switch (creation_result.status) {
            case 400:
                return results.status(400).json(creation_result.json);
            case 500:
                return results.status(500).json(creation_result.json);
            case 201:
                console.log(creation_result.json.id);
                const user_token = CryptoJS.AES.encrypt(creation_result.json.id.toString(), back_secretKey).toString();
                return results.status(201).json({ message: "User created successfully", id: creation_result.json.id, token: user_token });
        }
    } catch (e) {
        console.log(e);
        return results.status(500).json({ error: "internal error" });
    }
}
        

const connect_user = async (request, results) => {    
    console.log("CONNECTING USER");
    console.log('body data : ', request.body);
    console.log('url options : ', request.params.id);


    
    const requiredFields = ['username', 'password'];
    for (const field of requiredFields) {
        if (!request.body[field] ) {
            return results.status(400).json({error : `missing ${field} in body`});
        }
    }
    
    const user_data = {
        username: request.body.username,
        password: request.body.password,
        id: request.params.id
    }
    try {
        const connection_result = await connectUser_db(user_data);
        switch (connection_result.status) {
            case 400:
                return results.status(400).json(connection_result.json);
            case 500:
                return results.status(500).json(connection_result.json);
            case 200:
                const user_token = CryptoJS.AES.encrypt(connection_result.json.user_data.id.toString(), back_secretKey).toString();
                return results.status(200).json({ message: "User connected successfully", token: user_token, user_data: connection_result.json.user_data });
        }
    }   catch(e){
        return results.status(500).json({ error: "internal error" });
    }
    

}


// DATABASE QUERIES

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_CONTAINER_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const createUser_db = async (data) => {
    const { username, email, password, last_name, first_name } = data;

    try {
        const email_exist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const username_exist = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (email_exist.rows.length > 0 || username_exist.rows.length > 0) {
            return { status: 400, json: { error: 'User already exists', detail: email_exist.rows.length > 0 ? 'email' : 'username'}};
        } else {
            const insertResult = await pool.query(
                'INSERT INTO users (username, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [username, first_name, last_name, email, password]
            );
            return { status: 201, json: { id: insertResult.rows[0].id } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, json: { error: 'An error occurred', detail:error} };
    }
}

const connectUser_db = async (data) => {

    const {username, password, id } = data;
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (user.rows.length === 0) {
            return { status: 400, json: { error: 'User not found' }};
        } else {
            const user_password = CryptoJS.AES.decrypt(user.rows[0].password, db_secretKey).toString(CryptoJS.enc.Utf8);
            if (user.rows[0].username !== username && user.rows[0].email !== username) {
                return { status: 400, json: { error: 'Invalid username' }};
            }
            if (user_password !== password) {
                return { status: 400, json: { error: 'Invalid password' }};
            }
            return { status: 200, json: { user_data: user.rows[0] } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, json: { error: 'An error occurred', detail: error} };
    }
}

module.exports = {
    create_user,
    connect_user
}