import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        display: flex;
        flex-direction: column;
        background-color: #2D283E;
        font-family: 'Saira', sans-serif;
       
        h2 {
            color: #DDD7E9;
        }
    
        h1 {
            color: #8F8BAD;
        }

        margin: 0;

        button {
            
            border: 2px solid transparent;
            border-radius: 5px;
            transition: all 0.3s ease;
            background-color: #8F8BAD;
            color: antiquewhite;
            font-family: 'Saira', sans-serif;  
        } 

        button:hover {
            border-color: antiquewhite;
            background-color: transparent;
            color: antiquewhite;
    
        }  

        a {
            border: 2px solid transparent;
            background-color: #8F8BAD;
            border-radius: 5px;
            transition: all 0.3s ease;
            color: antiquewhite;
            text-decoration: none;
            font-family: 'Saira', sans-serif;  
        }
        a:hover,
        a:focus {
            color: #333;
            background-color: #fff;
        }
    }
`;

export { GlobalStyle };