import { ProfileSubContainer, ProfileSummaryComponent } from './style'

import { Link } from 'react-router-dom'

import {
  FaGithub,
  FaHome,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function ProfileSummary() {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <ProfileSummaryComponent>
        <h1>Loading...</h1>
      </ProfileSummaryComponent>
    )
  }
  return (
    <ProfileSummaryComponent>
      <ProfileSubContainer>
        <img src={user.avatarUrl} alt="logo" />
        <div>
          <header>
            <h1>{user.name}</h1>
            <Link title="github" target="_blank" to={user.githubURL}>
              Github
              <FaExternalLinkAlt size={24} />
            </Link>
          </header>

          <main>
            <p>{user.bio}</p>
          </main>

          <footer>
            <span title="usuário">
              <FaGithub size={24} />
              {user.login}
            </span>
            <span title="localização">
              <FaHome size={24} />
              {user.location}
            </span>
            <span title="seguidores">
              <FaUserFriends size={24} />
              {user.followers} seguidores
            </span>
          </footer>
        </div>
      </ProfileSubContainer>
    </ProfileSummaryComponent>
  )
}
