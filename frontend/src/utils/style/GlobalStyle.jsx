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
		background-color: #8F8BAD;
		border-radius: 5px;
		transition: all 0.3s ease;
		color: antiquewhite;
		text-decoration: none;
		width: 10em;
	}
	a:hover,
	a:focus {
		background-color: transparent;
		border-color: antiquewhite;
		color: antiquewhite;
	}

	.primary-button {

        border: 2px solid transparent;
        transition: all 0.3s ease;
        font-family: "BNPooly-Rounded", sans-serif;
        width: 10em;
        height: 40px;
        margin-top: 5%;
        margin-bottom: 10px;
        box-sizing: border-box;
        background-color: ${colors.primary};
        border-radius: 10px;
        font-weight: 400;
        font-size: 1.2em;
        width: 100%;
        max-width: 200px;
        color: ${colors.background};


        &:hover {
            border-color: ${colors.primary};
            background-color: transparent;
            color: ${colors.primary};
        }
    }

    .secondary-button {

        border: 2px solid transparent;
        transition: all 0.3s ease;

        height: 40px;
        margin-top: 5%;
        margin-bottom: 10px;
        box-sizing: border-box;
        background-color: transparent;
        border-radius: 10px;
        font-family: "BNPooly-Rounded", sans-serif;
        font-weight: 400;
        font-size: 1.2em;
        width: 100%;
        max-width: 200px;
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
