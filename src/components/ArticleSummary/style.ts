import styled from 'styled-components'

export const ArticleSummaryComponent = styled.header`
  width: 70%;
  //height: 168px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }

  nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      color: ${(props) => props.theme.blue};

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      padding: 5px;
      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-left: 10px;
    color: ${(props) => props.theme['base-title']};
    @media (max-width: 768px) {
      text-align: center;
      margin: initial;
    }
  }

  div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      margin: initial;
    }

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 5px;
    }
  }
`
