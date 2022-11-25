import styled from 'styled-components'
import { Block } from '../../components/Block'
import { UnitTestingExample } from '../../components/UnitTestingExample'

const CiStyled = styled.div``

export const Ci = () => {
  return (
    <CiStyled>
      <h1>CI</h1>
      <cite>
        CI (Continuous Integration) contains the steps between pressing
        &quot;push&quot; and deploying the application somewhere
      </cite>
      <Block>
        <p>
          Agile software development is the ongoing trend. So software is coming
          out adaptively, early and continually.
        </p>
        <p>
          It is common that a new version of software gets deployed multiple
          times a day
        </p>
        <p>
          (this needs automation, fail safes, tracing and most importantly
          making sure that bad code will not get into the deployment pipeline)
        </p>
      </Block>
      <Block>
        <h2>Testing</h2>
        <ul>
          <li>Unit testing</li>
          <li>E2E testing</li>
          <li>Integration testing</li>
          <li>Environment testing</li>
        </ul>
        <h3>Unit testing</h3>
        <UnitTestingExample />
        <h3>E2E testing</h3>
        <h3>Integration testing testing</h3>
      </Block>
      <Block>
        <h2>Linting</h2>
        <ul>
          <li>Consistent codebase</li>
          <li>Readability</li>
          <li>General testing of the codebase</li>
        </ul>
      </Block>
      <Block>
        <h2>Mimicking</h2>
        <ul>
          <li>All of this has to </li>
          <li>Who can approve and what</li>
        </ul>
        <h2>Mimicking the environment</h2>
        <p>What works on your computer does not necessarily work on others</p>
        <p>What works in one production environment might not work in others</p>
        <p>
          <b>
            It is crucial to match the production environment as well as
            possible
          </b>
        </p>
      </Block>
      <Block>
        <img src="https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=790b76116ca07e57196162793db29a875862ec54ecd8ef79&rid=giphy.gif&ct=g"></img>
        <blockquote>Anything that can go wrong will go wrong.</blockquote>
        <figcaption>- some murphy fellow apparently</figcaption>
      </Block>
      <Block>
        <h2>What can CI be accomplished with?</h2>
        <ul>
          <li>Github Actions</li>
          <li>Gitlab CI</li>
          <li>Jenkins</li>
          <li>TeamCity (IntelliJ)</li>
        </ul>
        to name a few
      </Block>
    </CiStyled>
  )
}
