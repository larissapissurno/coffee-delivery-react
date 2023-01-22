import { OrderWrapper } from '@pages/Checkout/styles'
import styled from 'styled-components'

export const LocaleInfo = styled(OrderWrapper)`
  margin-top: 0.975rem;
`

export const Grid = styled.div`
  /* display: grid; */
  /* grid-auto-flow: row; */
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
`

export const PaymentInfo = styled(OrderWrapper)`
  margin-top: 0.75rem;
`

export const PaymentTypeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`
