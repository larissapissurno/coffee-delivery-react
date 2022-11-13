import styled, { css } from 'styled-components'

interface InputProps {
  size: number
  grow?: boolean
}

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

  width: ${(props) => props.size + '%'};

  ${(props) =>
    props.grow &&
    css`
      flex-grow: 1;
    `}

  &:focus {
    border: 2px solid ${(props) => props.theme['primary-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`
