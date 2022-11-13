import styled, { css } from 'styled-components'

interface PaymentTypeWrapperProps {
  selected?: boolean
}

export const PaymentTypeWrapper = styled.div<PaymentTypeWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 12px;
  flex-grow: 1;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['accent-500']};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.6;
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.selected
      ? css`
          border: 1px solid ${(props) => props.theme['accent-500']};
          background-color: ${(props) => props.theme['accent-300']};
        `
      : css`
          &:hover {
            background-color: ${(props) => props.theme['base-hover']};
          }
        `}
`
