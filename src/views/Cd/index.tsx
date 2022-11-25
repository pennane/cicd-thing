import { Block } from '../../components/Block'

export const Cd = () => {
  return (
    <div>
      <h1>CD</h1>
      <cite>
        CD (Continuous delivery and continuous deployment) is ensuring that
        software can be reliably released at any time.
      </cite>
      <Block>
        <img
          height={200}
          src="https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=790b76116ca07e57196162793db29a875862ec54ecd8ef79&rid=giphy.gif&ct=g"
        ></img>
        <blockquote>Anything that can go wrong will go wrong.</blockquote>
        <figcaption>- some murphy fellow apparently</figcaption>
      </Block>
      <Block>
        <p>
          The CI provides a constantly changing mainline. CD picks on that and
          finds a release candidate.
        </p>
        <h2>Fallback</h2>
        <p>
          CD ensures that if somehow a bad release gets in, it can fallback to
          use an older release. Really this is another way of saying that CD
          should ensure that software can be reliably released at any time no
          matter the circumstances.
        </p>
        <img
          height={400}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Continuous_Delivery_process_diagram.svg/1462px-Continuous_Delivery_process_diagram.svg.png"
        />
      </Block>
      <Block>
        <h2>Services offering CD</h2>
        <ul>
          <li>
            CI/CD is abstract in the way that it can be more or less a single
            pipeline
          </li>
          <li>Most of the CI providers offer the whole CI/CD</li>
        </ul>
      </Block>
    </div>
  )
}
