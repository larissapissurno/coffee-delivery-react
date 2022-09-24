import styled from 'styled-components'

export const StyledIntroBackground = styled.section`
  width: 100vw;
  height: 34rem;
  background-image: url(../../../src/assets/images/intro-background.png);
  background-size: 100vw 34rem;
  background-repeat: no-repeat;
`

export const StyledContent = styled.div`
  width: ${(props) => props.theme['container-size']};
  margin: 0 auto;
  padding: 5.75rem 0;

  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const IntroItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 4.125rem;
`

interface IntroItemProps {
  variant: 'primary-500' | 'primary-700' | 'base-text' | 'accent-500'
}
export const IntroItem = styled.div<IntroItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  & > div {
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
