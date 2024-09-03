import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        background-color: #2D283E;
        font-family: 'Saira', sans-serif;

    }
    h2 {
        color: #DDD7E9;
    }

    h1 {
        color: #8F8BAD;
    }

    button {
        
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: #8F8BAD;
        color: antiquewhite;
        font-family: 'Saira', sans-serif;  
        width: 10em;
    } 

    button:hover {
        border-color: antiquewhite;
        background-color: transparent;
        color: antiquewhite;
    }  

    a {
        background-color: #8F8BAD;
        border-radius: 5px;
        transition: all 0.3s ease;
        color: antiquewhite;
        text-decoration: none;
        font-family: 'Saira', sans-serif;  
        width: 10em;
    }
    a:hover,
    a:focus {
        background-color: transparent;
        border-color: antiquewhite;
        color: antiquewhite;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    

`;

export { GlobalStyle };