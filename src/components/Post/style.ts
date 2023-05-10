import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostComponent = styled(Link)`
  text-decoration: none;
  border: 3px solid transparent;
  border-radius: 6px;

  background: ${(props) => props.theme['base-post']};
  width: 48%;
  height: 300px;

  @media (max-width: 1123px) {
    width: 100%;
    overflow: hidden;
  }

  &:active:focus {
    transition: ease 0.5s;
    border-color: ${(props) => props.theme.blue};
  }

  &:hover {
    border-color: ${(props) => props.theme['base-border']};
  }

  > div {
    color: ${(props) => props.theme['base-text']};
    padding: 2rem;
    height: 100%;
    border-radius: 6px;
    cursor: pointer;

    > article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;

      header {
        display: flex;
        align-items: start;
        justify-content: space-between;
        width: 100%;

        > h2 {
          text-align: left;

          max-width: 75%;
        }
        > span {
          display: block;
          width: fit-content;
          display: flex;
          align-items: center;
        }
      }

      > main {
        max-height: 150px;

        p {
          max-height: 100%;
          display: -webkit-box;
          line-height: 1.8;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`
