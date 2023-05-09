import { useEffect, useState } from 'react'
import { ProfileSummary } from '../../components/ProfileSummary'
import { HomeContainer } from './style'
import { Api } from '../../services/api/axios'

interface IUser {
  name: string
  login: string
  avatarUrl: string
  githubURL: string
  location: string
  followers: number
  bio: string
}

export function Home() {
  const [user, setUser] = useState<IUser | undefined>()

  useEffect(() => {
    async function getUser() {
      const response = await Api.get(`users/kassioOliveira`)

      const userData = response.data

      const newUser = {
        name: userData.name,
        login: userData.login,
        avatarUrl: userData.avatar_url,
        githubURL: userData.html_url,
        location: userData.location,
        followers: userData.followers,
        bio: userData.bio,
      }
      setUser(newUser)
    }

    getUser()
  }, [])

  return (
    <HomeContainer>
      <ProfileSummary user={user} />
    </HomeContainer>
  )
}
