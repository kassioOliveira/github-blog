import { ArticleSummary } from '../../components/ArticleSummary'
import { ArticleComponent } from './style'

import { useNavigate, useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import { PostType } from '../../contexts/UserContext'
import { useEffect, useState } from 'react'
import { Api } from '../../services/api/axios'
import { CustomError } from '../../errors/HttpRequestError'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'

export function Article() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [post, setPost] = useState<PostType | undefined>()

  useEffect(() => {
    Api.get(`repos/kassioOliveira/github-blog/issues/${id}`)
      .then((response) => {
        setPost(response.data)
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          if (error.statusCode === 404) {
            navigate('/notfound')
            return
          }

          const message = `${error.statusCode} ${error.message}`
          toast.warning(message, {
            toastId: 'articleError1',
          })
          return
        }
        const newError = new CustomError()
        toast.warning(newError.message, {
          toastId: 'articleError2',
        })
      })
  }, [id, navigate])

  return (
    <ArticleComponent>
      <ArticleSummary post={post} />

      <main>
        {post ? (
          <ReactMarkdown>{post.body.toString()}</ReactMarkdown>
        ) : (
          <Loading />
        )}
      </main>
    </ArticleComponent>
  )
}
