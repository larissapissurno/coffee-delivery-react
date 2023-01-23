import { ContentContainer } from 'src/styles/global'
import styled, { DefaultTheme } from 'styled-components'

export const ContentWrapper = styled(ContentContainer)`
  margin-top: calc(var(--header-hight) + 2.5rem);
`

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const SelectedCoffeesWrapper = styled(OrderWrapper)`
  margin-top: 0.975rem;
  border-radius: 6px 44px 6px 44px;
`

interface OrderHeaderProps {
  variant: keyof DefaultTheme
}
export const OrderHeader = styled.div<OrderHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[props.variant]};
  }
`

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
`

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 0.24rem;

  height: 46px;

  background: ${(props) => props.theme['primary-500']};
  border-radius: 6px;
  border: none;
  color: ${(props) => props.theme.white};

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.025rem;

  cursor: pointer;

  /* Inside auto layout */
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['primary-700']};
  }
`
