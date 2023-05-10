import styled from 'styled-components'

export const PostsComponent = styled.section`
  width: 80%;
  max-width: 1123px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.9rem;
  padding: 1rem 0;

  @media (max-width: 1123px) {
    flex-direction: column;
  }
`
