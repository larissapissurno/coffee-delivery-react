import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  width: 16rem;
  height: 19.375rem;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-top: -20px;
    width: 100px;
    height: 100px;
  }

  h3 {
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;

    margin-top: 0.5rem;
    padding: 0 1.25rem;
  }
`

export const TagList = styled.div`
  margin-top: 0.74rem;
  display: flex;
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['primary-300']};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    color: ${(props) => props.theme['primary-700']};
  }
`

export const CardFooter = styled.div`
  margin-top: 2.0625rem;
  width: 100%;
  padding: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  span:nth-child(1) {
    font-size: 0.875rem;
  }

  h3 {
    font-size: 1.5rem;
    display: inline-block;
    margin: unset;
  }
`

export const ShoppingSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const ShoppingCartButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  background: ${(props) => props.theme['accent-700']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-card']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['accent-500']};
  }
`
