import styled from 'styled-components'

export const SearchComponent = styled.div`
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    max-width: 1123px;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    > span {
      display: block;
      font-size: 1.2rem;
    }
  }

  div:nth-child(2) {
    width: 80%;
    max-width: 1123px;
    form {
      width: 100%;

      > input {
        width: 100%;
        height: 70px;
        border: 2px solid ${(props) => props.theme['base-border']};
        border-radius: 6px;
        outline: none;
        box-shadow: 0 0 0 0;
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
        padding: 1rem;
        font-size: 1.3rem;
        &:focus {
          border-color: ${(props) => props.theme.blue};
        }
      }
    }
  }
`
