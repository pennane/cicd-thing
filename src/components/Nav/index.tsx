import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Nav: FC<{ children?: ReactNode }> = ({ children }) => {
  return <StyledNav>{children}</StyledNav>
}
