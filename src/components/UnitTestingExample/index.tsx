import { clamp, gt, isNil, not, pathOr, pipe, range, __ } from 'ramda'
import { FC, useState } from 'react'
import { Block } from '../Block'
import { useGIndex } from './hooks/useGIndex'
import { getBottlesCount, getTotalPrice, stringToNumber, toEur } from './lib'
import isog from './isog.webp'
import styled from 'styled-components'

type TBottlesDisplayProps = {
  bottleCount: number
}

type TFetchPriceButtonProps = {
  fetchPrice: () => void
  price?: number
  loading: boolean
}

const WrapDisplay = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
`

const BottlesDisplayStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BottleStyled = styled.div`
  width: 0.5rem;
  height: 2rem;
  margin: 0.25rem;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    display: block;
  }
`

const Bottle = () => (
  <BottleStyled>
    <img src={isog} />
  </BottleStyled>
)

const BottlesDisplay: FC<TBottlesDisplayProps> = ({ bottleCount }) => {
  return (
    <BottlesDisplayStyled>
      {range(0, bottleCount).map((n) => (
        <Bottle key={n} />
      ))}
    </BottlesDisplayStyled>
  )
}

const isNotNil = pipe(isNil, not)

const FetchPriceButton: FC<TFetchPriceButtonProps> = ({
  fetchPrice,
  price,
  loading
}) => {
  const priceFetched = isNotNil(price)
  const text = priceFetched
    ? 'price already fetched'
    : ' get price for a bottle of wine'

  return (
    <button disabled={loading || priceFetched} onClick={fetchPrice}>
      {text}
    </button>
  )
}

const gt0 = gt(__, 0)

export const UnitTestingExample = () => {
  const { gIndex: price, loading, fetch: fetchPrice } = useGIndex()
  const [peopleCount, setPeopleCount] = useState(1)

  const bottleCount = getBottlesCount(peopleCount)

  const totalPrice = getTotalPrice(price, bottleCount)

  const handleChange = pipe(
    pathOr('0', ['target', 'value']),
    stringToNumber,
    clamp(0, 1000),
    setPeopleCount
  )

  return (
    <div>
      <Block>
        <h2>Prepare purchases for a dinner</h2>

        <WrapDisplay>
          <p>Amount of people attending:</p>
          <input type="number" onChange={handleChange} value={peopleCount} />
        </WrapDisplay>

        <WrapDisplay>
          <p>Bottles required:</p>
          <BottlesDisplay bottleCount={bottleCount} />
        </WrapDisplay>

        <p>
          Price:{' '}
          {loading ? 'loading..' : isNil(price) ? 'waiting' : toEur(price)}
        </p>

        <FetchPriceButton
          price={price}
          fetchPrice={fetchPrice}
          loading={loading}
        />

        <p>Total price for wine: {gt0(totalPrice) ? toEur(totalPrice) : ''}</p>
      </Block>
    </div>
  )
}
