import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
    left: 10%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2D283E;
   

    h2 {
        color: #DDD7E9;
    }

    h1 {
        color: #8F8BAD;
    }
`;

export { GlobalStyle, MainContent };