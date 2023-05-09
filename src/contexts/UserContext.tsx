import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Api } from '../services/api/axios'
import { CustomError } from '../errors/HttpRequestError'
import { toast } from 'react-toastify'

interface UserType {
  name: string
  login: string
  avatarUrl: string
  githubURL: string
  location: string
  followers: number
  bio: string
}

interface LabelType {
  color: string
  default: boolean
  description: string
  id: number
  nod_id: string
}

interface PostType {
  id: number
  title: string
  body: string
  comments: number
  created_at: string
  number: number
  labels: LabelType[]
}

interface UseContextType {
  user: UserType | undefined
  posts: PostType[]
  fetchPosts: (query?: string) => void
}

export const UserContext = createContext({} as UseContextType)

interface UserProviderProp {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProp) {
  const [user, setUser] = useState<UserType | undefined>()
  const [posts, setPosts] = useState<PostType[]>([])

  const fetchUser = useCallback(async () => {
    Api.get(`users/kassioOliveira`)
      .then((response) => {
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
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          toast.warning(`${error.statusCode} ${error.message}`, {
            toastId: 'error1',
          })
          return
        }

        const customError = new CustomError()
        toast.warning(`${customError.statusCode} ${customError.message}`, {
          toastId: 'error2',
        })
      })
  }, [])

  const fetchPosts = useCallback((queryParam?: string) => {
    const defaultQuery = 'repo:kassioOliveira/github-blog'
    const query = queryParam ? `${queryParam} ${defaultQuery}` : defaultQuery

    Api.get('search/issues', {
      params: {
        q: query,
      },
    })
      .then((response) => {
        setPosts(response.data.items)
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          toast.warning(`${error.statusCode} ${error.message}`, {
            toastId: 'error3',
          })
          return
        }

        const customError = new CustomError()
        toast.warning(`${customError.statusCode} ${customError.message}`, {
          toastId: 'error4',
        })
      })
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <UserContext.Provider
      value={{
        user,
        posts,
        fetchPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
