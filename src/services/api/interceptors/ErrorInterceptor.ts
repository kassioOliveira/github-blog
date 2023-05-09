import { AxiosError } from 'axios'
import { CustomError } from '../../../errors/HttpRequestError'

export const ErrorInterceptor = (error: AxiosError) => {
  const status = error.response?.status || 500

  switch (status) {
    case 401: {
      return Promise.reject(
        new CustomError(401, 'Autenticação (problemas relacionados ao token)'),
      )
    }

    case 403: {
      return Promise.reject(
        new CustomError(403, 'Proibido (problemas relacionados à permissão)'),
      )
    }

    case 400: {
      return Promise.reject(new CustomError(400, 'Falha na requisição.'))
    }

    case 404: {
      return Promise.reject(new CustomError(404, 'Não encontrado.'))
    }

    case 409: {
      return Promise.reject(new CustomError(409, 'Erro de conflito.'))
    }

    case 422: {
      return Promise.reject(new CustomError(422, 'Não processável!'))
    }

    default: {
      return Promise.reject(new CustomError(500, 'Ops! ALgo deu errado!'))
    }
  }
}
