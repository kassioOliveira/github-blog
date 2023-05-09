import { ProfileSummary } from '../../components/ProfileSummary'
import { HomeContainer } from './style'
import { SearchForm } from '../../components/SearchForm'

export function Home() {
  return (
    <HomeContainer>
      <ProfileSummary />
      <SearchForm />
    </HomeContainer>
  )
}
