import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-color: #000;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    main {
        flex: 1;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

const MainContent = styled.main`
    flex: 1;
    position: relative;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    background-image: radial-gradient(ellipse at top, transparent 0%, 
                    var(--dark-color)), radial-gradient(ellipse at bottom, 
                    var(--dark-color), rgba(145, 233, 255, 0.2)), 
                    repeating-linear-gradient(220deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                    repeating-linear-gradient(189deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                    repeating-linear-gradient(148deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                    linear-gradient(90deg, #00fffa, #f0f0f0);
    z-index: -1;

    h2 {
        color: #DDD7E9;
    }

    h1 {
        color: #8F8BAD;
    }
`;

export { GlobalStyle, MainContent };