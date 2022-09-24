import styled from 'styled-components'

export const StyledNav = styled.nav`
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

export const ButtonPrimary = styled(ButtonBase)`
  color: ${(props) => props.theme['primary-700']};
  background-color: ${(props) => props.theme['primary-300']};
`

export const ButtonAccent = styled(ButtonBase)`
  color: ${(props) => props.theme['accent-700']};
  background-color: ${(props) => props.theme['accent-300']};
`
