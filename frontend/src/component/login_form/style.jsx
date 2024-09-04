import styled from "styled-components";
import colors from "../../utils/style/Colors";

export const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    justify-content: space-evenly;

`;

export const LoginFormContainer = styled.form`
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