import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --header-hight: 6.75rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    background: ${(props) => props.theme.background};
  }

  // titles
  h1, h2, h3, h4 {
    font-family: 'Baloo 2';
    font-style: normal;
    line-height: 130%;
    font-weight: 700;
  }

  h4 {
    font-size: 18px;
  }

  button {
    line-height: 0;
  }

`
export const ContentContainer = styled.div`
  width: ${(props) => props.theme['container-size']};
  margin: 0 auto;
`
