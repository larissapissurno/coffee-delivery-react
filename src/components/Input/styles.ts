import styled, { css } from 'styled-components'

interface InputProps {
  size?: number
  grow?: boolean
  error?: boolean
}

export const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: ${(props) => props.size + '%'};
  height: 4rem;

  ${(props) =>
    props.grow &&
    css`
      flex-grow: 1;
    `}
`

export const Input = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  outline: none;

  width: 100%;

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-500']};
  }

  ${(props) =>
    props.error &&
    css`
      outline: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};

      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
      }
    `}

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 130%;
`
