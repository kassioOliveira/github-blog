import { HeaderComponent } from './style'

import headerImg from '../../assests/header.bg.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={headerImg} alt="Github blog logo" />
    </HeaderComponent>
  )
}
