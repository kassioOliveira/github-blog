import { PostType } from '../../contexts/UserContext'
import { formattedDate } from '../../utils/formatters/formatDate'
import { formattedString } from '../../utils/formatters/formatString'
import { PostComponent } from './style'

interface PostTypeProp {
  post: PostType
}

export function Post({ post }: PostTypeProp) {
  return (
    <PostComponent to={`/article/${post.number}`}>
      <div>
        <article>
          <header>
            <h2>{post.title}</h2>
            <span>{formattedDate(post.created_at)}</span>
          </header>
          <main>
            <p>{formattedString(post.body)}</p>
          </main>
        </article>
      </div>
    </PostComponent>
  )
}
