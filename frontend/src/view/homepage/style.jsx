import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 79vh;
    `;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3%; /* Espace entre les boutons */
    position: relative;
    `;
    

export const Title = styled.h1` 
    margin-top: 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Saira', sans-serif;
    font-weight: 600;
    font-size: 4em;
    `;

export const SubTitle = styled.h2`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family:'Saira', sans-serif;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 2%;
    `;


export const LoginButton = styled.button`

    border: 2px solid transparent;
    transition: all 0.3s ease;
    font-family: 'Saira', sans-serif;  
    width: 10em;
    height: 40px;
    margin-top: 5%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #fbebd4;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1.2em;
    width: 100%;
    max-width: 200px;
    color: #1E1E1E;

    &:hover {
        border-color: #fbebd4;
        background-color: transparent;
        color: #fbebd4;
    } 
    `;

export const RegisterButton = styled.button`


    border: 2px solid transparent;
    transition: all 0.3s ease;

    height: 40px;
    margin-top: 5%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 10px;
    font-family: 'Saira', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    width: 100%;
    max-width: 200px;
    color: #fbebd4;
    border-color: #fbebd4;


    &:hover {
        border-color: transparent;
        background-color: #fbebd4;
        color: #1E1E1E;
    } 
`;

