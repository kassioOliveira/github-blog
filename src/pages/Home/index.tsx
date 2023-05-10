import { ProfileSummary } from '../../components/ProfileSummary'
import { HomeContainer } from './style'
import { SearchForm } from '../../components/SearchForm'
import { Posts } from '../../components/Posts'

export function Home() {
  return (
    <HomeContainer>
      <ProfileSummary />
      <SearchForm />
      <Posts />
    </HomeContainer>
  )
}
