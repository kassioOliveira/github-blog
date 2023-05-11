import styled from 'styled-components'

export const NotFoundComponent = styled.div`
  background: ${(props) => props.theme['base-profile']};
  margin: 0 auto;
  margin-top: 5rem;
  width: fit-content;
  padding: 2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-text']};
    strong {
    }
  }

  div {
    a {
      text-decoration: none;
      padding: 0.8rem;
      border-radius: 6px;
      cursor: pointer;
      background: ${(props) => props.theme['base-post']};
      color: ${(props) => props.theme['base-text']};

      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        background: ${(props) => props.theme['base-border']};
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
