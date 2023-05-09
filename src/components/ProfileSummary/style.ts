import styled from 'styled-components'

export const ProfileSummaryComponent = styled.section`
  width: 80%;
  max-width: 1123px;

  margin: 0 auto;
  background: ${(props) => props.theme['base-profile']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
  border-radius: 6px;

  img {
    width: 230px;
    border-radius: 6px;
  }
`

export const ProfileSubContainer = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: end;

  > div {
    width: 100%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 1rem;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    main {
      p {
        font-size: 1.3rem;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      > span {
        display: block;
        font-size: 1.5rem;
        display: flex;
        gap: 1rem;
        align-items: center;
      }
    }
  }
`
