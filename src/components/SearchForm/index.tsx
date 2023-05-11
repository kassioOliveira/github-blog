import { SearchComponent } from './style'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts, posts } = useContext(UserContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleQuery({ query }: SearchFormInputs) {
    fetchPosts(query)
  }

  return (
    <SearchComponent>
      <div>
        <h2>Pubicações</h2>
        <span>{posts?.length} publicões</span>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleQuery)}>
          <input
            type="text"
            placeholder="Click enter para buscar"
            {...register('query')}
          />
        </form>
      </div>
    </SearchComponent>
  )
}
