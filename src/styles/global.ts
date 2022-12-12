import styled, { createGlobalStyle, css, DefaultTheme } from 'styled-components'

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

interface BulletProps {
  variant: keyof DefaultTheme
}
export const Bullet = styled.div<BulletProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  div:first-child {
    flex: 0 0 auto;
    height: 2rem;
    width: 2rem;

    border-radius: 50%;
    background-color: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme.background};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
