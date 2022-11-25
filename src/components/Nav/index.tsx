import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../constants'
import { TRoute } from '../../types'

type TNavItemProps = {
  route: TRoute
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const NavLinkStyled = styled(NavLink)`
  color: red;
`

const NavItem: FC<TNavItemProps> = ({ route }) => {
  return <NavLinkStyled to={route.path}>{route.name}</NavLinkStyled>
}

export const Nav = () => {
  return (
    <NavStyled>
      {ROUTES.map((route, i) => (
        <NavItem key={i} route={route} />
      ))}
    </NavStyled>
  )
}
