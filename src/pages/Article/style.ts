import styled from 'styled-components'

export const ArticleComponent = styled.div`
  margin-top: -2.5rem;

  main {
    width: 70%;
    margin: 2rem auto;

    h3 {
      margin: 1rem 0;
      color: ${(props) => props.theme['base-title']};
    }

    img {
      margin: 10px auto;
      width: 100%;
    }

    pre {
      background: ${(props) => props.theme['base-post']};
      width: 100%;
      padding: 1rem;
      margin: 1.5rem auto;
      border-radius: 6px;
      white-space: pre-wrap;
      white-space: moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }

    code {
      background: initial;
      width: 100%;
      font-size: 0.9rem;
    }
  }
`
