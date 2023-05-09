import { Header } from '../../components/Header'
import { DefaultLayoutComponent } from './style'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <DefaultLayoutComponent>
      <Header />

      <Outlet />
    </DefaultLayoutComponent>
  )
}
