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
