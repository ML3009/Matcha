import styled from 'styled-components';
import colors from '../../utils/style/Colors'

export const FormInput = styled.input`
    
    grid-column: 2;
    
    border: 1px inset ${colors.primary};
    border-radius: 5px;
    
    color: ${colors.primary};
    background-color: ${colors.secondary};

    font-size: 1em;
    font-weight: 500;


`;

export const FormTitle = styled.h3`

    color: ${colors.primary};

    grid-column: 1;

    text-shadow: 2px 1px 1px ${colors.background};
`;


export const FormLabel = styled.label`

    font-weight: 400;
    font-size: 1.2em;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;
    align-items: center;


    color: ${colors.primary};
    
`;

