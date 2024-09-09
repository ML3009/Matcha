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

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    button {
        font-family: "BNPooly-Rounded", sans-serif;
        font-weight: 400;
        font-size: 1.2em;

        transition: all 0.5s ease;

        height: 2.3em;
        width: 100%;
        max-width: 10em;


        margin-top: 1.5em;
        margin-bottom: 1.5em;

        border: 2px solid transparent;
        border-radius: 10px;


    }

    .primary-button {

        background-color: #9494cc;
        color: #fbebd4;


        &:hover {
            border-color: #9494cc;
            background-color: transparent;
            color: #9494cc;
        }
    }

    .secondary-button {

        background-color: transparent;
        color: #9494cc;
        border-color: #9494cc;

        &:hover {
            border-color: transparent;
            background-color: #9494cc;
            color: #fbebd4;
        }
    }



`;

export { GlobalStyle };
