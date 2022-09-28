import styled from 'styled-components'

export const StyledCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    border: none;
    cursor: pointer;
    padding: 0;

    font-size: 0.875rem;
    color: ${(props) => props.theme['accent-500']};

    background: ${(props) => props.theme['base-button']};

    transition: color 0.2s;
  }
`
