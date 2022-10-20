import styled, { css, DefaultTheme, StyledComponent } from 'styled-components'

export const FixedNav = styled.nav`
  position: fixed;
  width: 100%;

  background-color: ${(props) => props.theme.background};
`

export const StyledContent = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

const ButtonBase = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  padding: 8px;
  border-radius: 6px;
  border: none;

  font-size: 0.875rem;
`

interface ButtonPrimaryProps {
  badge?: number
}
export const ButtonPrimary = styled<
  StyledComponent<'button', DefaultTheme, ButtonPrimaryProps, never>
>(ButtonBase)`
  color: ${(props) => props.theme['primary-700']};
  background-color: ${(props) => props.theme['primary-300']};
  position: relative;
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme['primary-500']};
  }

  ${(props) =>
    props.badge &&
    props.badge > 0 &&
    css<ButtonPrimaryProps>`
      &::after {
        content: '${(props) => props.badge}';
        position: absolute;
        background: ${(props) => props.theme['primary-700']};
        text-align: center;
        font-size: 0.75rem;
        border-radius: 50%;
        color: white;
        border: 1px solid ${(props) => props.theme['primary-700']};
        line-height: 1.25rem;
        min-height: 1.25rem;
        min-width: 1.25rem;
        right: -0.625rem;
        top: -0.625rem;
      }
    `}
`

export const ButtonAccent = styled(ButtonBase)`
  color: ${(props) => props.theme['accent-700']};
  background-color: ${(props) => props.theme['accent-300']};
`
