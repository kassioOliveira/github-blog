import styled from 'styled-components'

export const LoadingComponent = styled.div`
  width: 80%;
  max-width: 1123px;
  height: 100px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-profile']};
  margin: 10px auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`
