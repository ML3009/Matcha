import styled from 'styled-components';
import colors from '../../utils/style/Colors'


export const StyledRF = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    justify-content: space-evenly;
`;

export const StyledForm = styled.form`
    width: 80%;
    max-width: 500px;
    margin-top: 2em;
    margin-bottom: 2em;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.secondary};
    border-radius: 10px;
    border: 1px inset ${colors.primary};
    padding: 20px;
    box-sizing: border-box;
`;

export const FormError = styled.div`
        border: 1px solid ${colors.primary};
        border-radius: 10px;
        padding: 1em;
        background-color: ${colors.secondary};
`;

export const ErrorMessageText = styled.p`
    color: ${colors.primary};
    margin: 5px 0;
    font-size: 0.9em;
`;

export const ErrorTitle = styled.h3`
    text-shadow: 2px 1px 1px ${colors.background};
    color: lightcoral;
    margin-bottom: 10px;
`;