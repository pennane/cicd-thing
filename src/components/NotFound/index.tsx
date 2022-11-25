import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Block } from '../Block'
const NotFoundStyled = styled.div`
  margin: 3rem;
`

export const NotFound = () => {
  return (
    <NotFoundStyled>
      <Block>
        <h1>404 not found</h1>
        <p>Requested page does not exist in this cicd demo thing</p>
        <Link to="/">back home</Link>
      </Block>
    </NotFoundStyled>
  )
}
