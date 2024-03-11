import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
:root {
    --dark-mode-elements: hsl(209, 23%, 22%);
    --dark-mode-background: hsl(207, 26%, 17%);
    --dark-mode-text: hsl(0, 0%, 100%);
    --dark-mode-input: hsl(0, 0%, 90%);
}

* {
    box-sizing: border-box;
}

body{
    background-color: var(--dark-mode-background);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
    margin: 0px;
}

.container {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    flex-wrap: wrap;
    max-width: 1440px;
    padding: 5px 10px;
    margin: auto;
}
`;
