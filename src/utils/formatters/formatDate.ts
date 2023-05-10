import { formatDistanceToNow } from 'date-fns'

import { ptBR } from 'date-fns/locale'

export const formattedDate = (date: string) => {
  const newDate = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })
  return newDate
}
