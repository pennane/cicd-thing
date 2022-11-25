import { isNil, not, pathOr, pipe, range } from 'ramda'
import { FC, useState } from 'react'
import { Block } from '../Block'
import { useGIndex } from './hooks/useGIndex'
import { getBottlesCount, getTotalPrice, stringToNumber } from './lib'
import isog from './isog.webp'
import styled from 'styled-components'

const WrapDisplay = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  flex-wrap: wrap;
`

const BottlesDisplayStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 32px;
    margin: 0.5rem -0.25rem;
  }
  margin-bottom: 2rem;
`

const BottlesDisplay: FC<{ bottleCount: number }> = ({ bottleCount }) => {
  return (
    <BottlesDisplayStyled>
      {range(0, bottleCount).map((i) => (
        <img key={i} src={isog} />
      ))}
    </BottlesDisplayStyled>
  )
}

type TFetchPriceButtonProps = {
  fetchPrice: () => void
  price?: number
}

const isNotNil = pipe(isNil, not)

const FetchPriceButton: FC<TFetchPriceButtonProps> = ({
  fetchPrice,
  price
}) => {
  const priceFetched = isNotNil(price)
  const text = priceFetched
    ? 'price already fetched'
    : ' get the price for a bottle of wine'

  return (
    <button disabled={priceFetched} onClick={fetchPrice}>
      {text}
    </button>
  )
}

export const UnitTestingExample = () => {
  const { gIndex: price, loading, fetch: fetchPrice } = useGIndex()
  const [peopleCount, setPeopleCount] = useState(0)

  const priceText = loading ? '...loading' : price || 'waiting'

  const bottleCount = getBottlesCount(peopleCount)
  const totalPrice = getTotalPrice(price, bottleCount)

  const handleChange = pipe(
    pathOr('0', ['target', 'value']),
    stringToNumber,
    setPeopleCount
  )

  return (
    <div>
      <Block>
        <h2>Prepare purchases for a dinner</h2>
        <WrapDisplay>
          <p>Amount of people attending:</p>
          <input onChange={handleChange} />
        </WrapDisplay>

        <WrapDisplay>
          <p>Bottles required:</p>

          <BottlesDisplay bottleCount={bottleCount} />
        </WrapDisplay>

        <p>Price: {priceText}</p>

        <FetchPriceButton price={price} fetchPrice={fetchPrice} />

        <p>Price for all the wine: {totalPrice}</p>
      </Block>
    </div>
  )
}
