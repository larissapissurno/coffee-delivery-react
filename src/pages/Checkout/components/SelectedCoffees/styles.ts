import { OrderWrapper } from '@pages/Checkout/styles'
import styled from 'styled-components'

export const SelectedCoffeesWrapper = styled(OrderWrapper)`
  margin-top: 0.975rem;
  border-radius: 6px 44px 6px 44px;
`

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    gap: 1.25rem;
    flex-direction: row;
  }

  > span {
    font-weight: 700;
  }
`
export const SelectedCoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }

  button {
    border: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 0.375rem 0.5rem;
    background: ${(props) => props.theme['base-button']};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-size: 0.875rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme['accent-500']};
    }
  }

  button:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const SelectedCoffeesTotals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`
