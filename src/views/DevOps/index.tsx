import { Block } from '../../components/Block'

export const DevOps = () => {
  return (
    <div>
      <h1>DevOps</h1>

      <cite>
        DevOps (Development Operations) is a set of conventions and tools that
        allow integrating new features to be automated, reliable and agile
      </cite>

      <Block>
        <h2>Consists of what actually?</h2>
        <ul>
          <li>Automation</li>
          <li>Site reliability engineering</li>
          <li>Configuration</li>
          <li>Tooling</li>
          <li>Heuristics for teams</li>
          <li>Coding</li>
          <li>CI/CD</li>
        </ul>
      </Block>
      <Block>
        <h2>Enables what exactly?</h2>
        <ul>
          <li>development efficiency</li>
          <li>automated test checking</li>
          <li>forcing conventions</li>
          <li>
            <b>pushing out features frequently</b>
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
        (DevOps engineer, Site Reliability engineer)
      </Block>
      <Block>
        <h2>Next up CI/CD</h2>

        <p>On the other two pages CI/CD will be discussed.</p>
        <p>
          In brief CI/CD (Continuous integration and Continuous
          delivery/deployment) are the steps between developer pressing
          &quot;push&quot; and the code being deployed.
        </p>
        <img
          height={250}
          src="https://915929.smushcdn.com/2689054/wp-content/uploads/2021/07/k004-CI.jpg?lossy=1&strip=1&webp=1"
        />
      </Block>
    </div>
  )
}
