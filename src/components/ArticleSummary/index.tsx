import { Link, useNavigate } from 'react-router-dom'
import { ArticleSummaryComponent } from './style'
import { FaAngleLeft, FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'

import { PostType, UserContext } from '../../contexts/UserContext'
import { formattedDate } from '../../utils/formatters/formatDate'
import { useContext } from 'react'

interface ArticleSummaryProp {
  post: PostType | undefined
}

export function ArticleSummary({ post }: ArticleSummaryProp) {
  const navigate = useNavigate()

  const { user } = useContext(UserContext)

  if (!post || !user) {
    return (
      <ArticleSummaryComponent>
        <h1>Loading....</h1>
      </ArticleSummaryComponent>
    )
  }
  return (
    <ArticleSummaryComponent>
      <nav>
        <button type="button" onClick={() => navigate(-1)}>
          <FaAngleLeft size={24} />
          Voltar
        </button>

        <Link target="_blank" to={post.html_url}>
          Ver no Github
        </Link>
      </nav>
      <h1>{post.title}</h1>
      <div>
        <span>
          <FaGithub size={24} />
          {user.login}
        </span>
        <span>
          <FaCalendarDay size={24} />
          {formattedDate(post.created_at)}
        </span>
        <span>
          <FaComment size={24} /> {post.comments} comentários
        </span>
      </div>
    </ArticleSummaryComponent>
  )
}
