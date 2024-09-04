import { createGlobalStyle } from 'styled-components';
import BNPoolyRoundedWoff2 from '../../assets/fonts/BNPooly-Rounded.woff2';


const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'BNPooly-Rounded';
        src: url(${BNPoolyRoundedWoff2}) format('woff2');
    }

    body {
        background-color: #fbebd4;
        font-family: 'BNPooly-Rounded', sans-serif;

    }

    h2 {
        color: #cec7d4;
    }

    h1 {
        color: #9494cc;
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