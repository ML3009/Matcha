import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
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
    font-weight: 900;
    font-size: 4em;
    font-family: "BNPooly-Rounded", sans-serif;
    `;

export const SubTitle = styled.h2`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "BNPooly-Rounded", sans-serif;
    font-weight: 100;
    margin-top: 0;
    margin-bottom: 2%;
    `;




