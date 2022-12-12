import { Bullet } from 'src/styles/global'
import styled from 'styled-components'

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  gap: 2.5rem;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2.5rem;

    width: 32.875rem;
    height: 16.875rem;

    border: 1px solid transparent;
    background: linear-gradient(
          ${(props) => props.theme.background},
          ${(props) => props.theme.background}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme['primary-500']},
          ${(props) => props.theme['accent-500']}
        )
        border-box;
    border-radius: 0.375rem 2.25rem;
  }
`

export const OrderInfo = styled(Bullet)`
  div:nth-child(2) {
    color: ${(props) => props.theme['base-text']};
  }
`
