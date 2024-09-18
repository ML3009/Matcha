import { createGlobalStyle } from 'styled-components';
import BNPoolyRoundedWoff2 from '../../assets/fonts/BNPooly-Rounded.woff2';
import  colors from './Colors';

const GlobalStyle = createGlobalStyle`


	@font-face {
		font-family: 'BNPooly-Rounded';
		src: url(${BNPoolyRoundedWoff2}) format('woff2');
	}

	body {
		background-color: ${colors.background};
		font-family: 'BNPooly-Rounded', sans-serif;
		display: grid;
		grid-gap: 1em;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:"header"
							"main"
							"footer";
	}


	h1 {
		color: ${colors.primary};
	}

	h2 {
		color: ${colors.secondary};
	}


	a {
		background-color: ${colors.primary};
		border-radius: 5px;
		color: antiquewhite;
		text-decoration: none;
		width: 10em;
        transition: all 0.5s ease;
        border: 2px solid transparent;
        border-radius: 10px;
        font-size: 1.2em;
	}
    
    a:hover,
    a:focus {     
        border-color: ${colors.primary};
        background-color: transparent;
        color: ${colors.primary};
    }



    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    button {
        font-family: "BNPooly-Rounded", sans-serif;
        font-size: 1.2em;

        transition: all 0.5s ease;

        height: 35px;
        width: 100%;
        max-width: 10em;


        margin-top: 1.5em;
        margin-bottom: 1.5em;

        border: 2px solid transparent;
        border-radius: 10px;

        cursor: pointer;


    }

    .primary-button {

        background-color: ${colors.primary};
        color: ${colors.background};


        &:hover {
            background-color: transparent;
            border-color: ${colors.primary};
            color: ${colors.primary};
        }
    }

    .secondary-button {

        background-color: transparent;
        color: ${colors.primary};
        border-color: ${colors.primary};

        &:hover {
            border-color: transparent;
            background-color: ${colors.primary};
            color: ${colors.background};
        }
    }
`;

export { GlobalStyle };
