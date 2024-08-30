import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "header header header header"
        "main main main main"
        "footer footer footer footer";
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
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
        }

        footer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
        }

`;

export { GlobalStyle };