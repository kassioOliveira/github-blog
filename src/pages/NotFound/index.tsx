import { FaHome } from 'react-icons/fa'
import { NotFoundComponent } from './style'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <NotFoundComponent>
      <div>
        <h1>
          <strong>404</strong> Não encontrado!
        </h1>
      </div>
      <div>
        <Link to={'/'}>
          <FaHome size={24} /> inicío
        </Link>
      </div>
    </NotFoundComponent>
  )
}
