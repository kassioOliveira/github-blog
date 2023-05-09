import { SearchComponent } from './style'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleQuery({ query }: SearchFormInputs) {
    console.log(query)
  }

  return (
    <SearchComponent>
      <div>
        <h2>Pubicações</h2>
        <span>6 publicões</span>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleQuery)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </div>
    </SearchComponent>
  )
}
