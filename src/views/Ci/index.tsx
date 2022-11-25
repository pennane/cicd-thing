import { Block } from '../../components/Block'

export const Ci = () => {
  return (
    <div>
      <h1>CI</h1>
      <cite>
        CI (Continuous Integration) is the practice of merging all
        developers&apos; working copies into one place several times a day
      </cite>
      <Block>
        <p>
          If a developer works on a branch long enough without merging it to the
          mainline, it can turn into a &quot;merge hell&quot; situation.
        </p>
        <p>
          This can be avoided if developers merge their changes incrementally
          and often.
        </p>
        <p>
          This can mean pushing changes into mainline (some development branch)
          multiple times a day.
        </p>
        <p>
          Pushing changes multiple times a day is not the whole story though as
          constantly updating the codebase creates unforeseen problems and
          breakages. This means integrating new features will require testing,
          testing and testing.
        </p>
      </Block>
      <Block>
        <h2>What should be done in CI</h2>
        <ul>
          <li>Testing</li>
          <li>Linting</li>
          <li>Forcing code being up to date</li>
          <li>Security audits</li>
        </ul>
      </Block>
      <Block>
        <h2>Testing</h2>
        <ul>
          <li>Unit testing</li>
          <li>E2E testing</li>
          <li>Integration testing</li>
          <li>Environment testing</li>
        </ul>
        <p>
          Test the code changes locally, then test the code changes before
          merging into mainline and then test the code changes before allowing
          deployment.
        </p>
      </Block>
      <Block>
        <h2>Linting</h2>
        Report violations of a style policy
        <ul>
          <li>Create consistent codebase</li>
          <li>Readability</li>
          <li>
            Some lint rules can be set to detect antipatterns and things prone
            to bugs
          </li>
          <li>
            <a href="https://eslint.org/">eslint</a>
          </li>
        </ul>
      </Block>
      <Block>
        <h2>Mimicking production</h2>
        <p>What works on your computer does not necessarily work on others</p>
        <p>What works in one environment might not work in others</p>
        <p>
          <b>
            It is crucial to match local environment, and more importantly the
            mainline against production environment as well as possible
          </b>
        </p>
      </Block>

      <Block>
        <h2>Services offering CI</h2>
        <ul>
          <li>
            <a href="https://github.com/features/actions">Github Actions</a>
          </li>
          <li>Gitlab CI</li>
          <li>Buildkite</li>
          <li>Jenkins</li>
          <li>TeamCity (IntelliJ)</li>
        </ul>
        to name a few
      </Block>
    </div>
  )
}
