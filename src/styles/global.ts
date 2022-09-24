import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    background: ${(props) => props.theme.background};
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }

  button {
    line-height: 0;
  }
`
export const ContentContainer = styled.div`
  width: ${(props) => props.theme['container-size']};
  margin: 0 auto;
`

export const StyledTitleL = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
`

export const StyledTextRegularL = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`

export const StyledTextSubtitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-stretch: 100;
  font-size: 1.25rem;
`

export const StyledText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.3;
`
