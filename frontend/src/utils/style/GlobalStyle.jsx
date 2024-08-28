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
            height: 40px;
            width: 100%;
            max-width: 200px;
            margin-top: 5%;
            margin-bottom: 10%;
            border: 2px solid transparent;
            border-radius: 5px;
            box-sizing: border-box;
            transition: all 0.3s ease;
            background-color: #8F8BAD;
            color: antiquewhite;
            font-family: 'Saira', sans-serif;
            font-weight: 400;
        } 
    }

  


`;

export { GlobalStyle };