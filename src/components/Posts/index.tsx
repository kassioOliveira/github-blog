import { useContext } from 'react'
import { PostsComponent } from './style'
import { UserContext } from '../../contexts/UserContext'
import { Post } from '../Post'
import { Loading } from '../Loading'

export function Posts() {
  const { posts } = useContext(UserContext)

  if (!posts.length) {
    return <Loading />
  }

  return (
    <PostsComponent>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </PostsComponent>
  )
}
