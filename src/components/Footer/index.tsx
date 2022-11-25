import styled from 'styled-components'
const FooterStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  gap: 1rem;
  margin: 3rem;
`

export const Footer = () => {
  return (
    <FooterStyled>
      <a href="https://github.com/pennane/cicd-thing">github</a>
    </FooterStyled>
  )
}
