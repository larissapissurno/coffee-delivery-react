import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  width: 16rem;
  height: 19.375rem;

  img {
    margin-top: -20px;
  }

  > span {
    margin-top: 0.74rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['primary-300']};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    color: ${(props) => props.theme['primary-700']};
  }

  h3 {
    margin-top: 1rem;
  }
`

export const StyledCounter = styled.button``
