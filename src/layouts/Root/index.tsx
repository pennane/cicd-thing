import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RootStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 4rem;
  margin: 0 1rem;
  gap: 1rem;
  width: 750px;
  max-width: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`

export const Root = () => {
  return (
    <RootWrapper>
      <RootStyled>
        <Nav />
        <ContentWrapper>
          <div>
            <Outlet />
          </div>
        </ContentWrapper>
        <Footer />
      </RootStyled>
    </RootWrapper>
  )
}
