import styled from 'styled-components'
import { Block } from '../../components/Block'

const DevOpsStyled = styled.div``

export const DevOps = () => {
  return (
    <DevOpsStyled>
      <h1>DevOps</h1>

      <cite>
        DevOps (Development Operations) is a set of conventions and tools that
        allow the publishing pipeline be automated, reliable and agile
      </cite>

      <Block>
        <h2>Consists of what actually?</h2>
        <ul>
          <li>Automation</li>
          <li>Site reliability engineering</li>
          <li>Configuration</li>
          <li>Tooling</li>
          <li>Heuristics between teams</li>
          <li>CI/CD</li>
          <li>Coding</li>
        </ul>
      </Block>
      <Block>
        <h2>Enables what exactly?</h2>
        <ul>
          <li>development efficiency</li>
          <li>automated test checking</li>
          <li>forcing conventions</li>
          <li>
            <b>kushing features frequently</b>
          </li>
          <li>
            <b>keeping the site reliable</b>
          </li>
        </ul>
      </Block>
      <Block>
        <h2>Who should know this stuff?</h2>
        <p>all da software engineers, dude</p>
      </Block>
      <Block>
        There are also work titles that are more or completely focused on DevOps
        (DevOps engineer, Site Reliability engineer, and Fullstack developer)
      </Block>
    </DevOpsStyled>
  )
}
