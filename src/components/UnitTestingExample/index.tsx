import { pathOr, pipe } from 'ramda'
import { useState } from 'react'
import { Block } from '../Block'
import { useGIndex } from './hooks/useGIndex'
import { getTotalPrice, stringToNumber } from './lib'

export const UnitTestingExample = () => {
  const {
    gIndex: price,
    loading: priceLoading,
    fetch: fetchPrice
  } = useGIndex()
  const [peopleCount, setPeopleCount] = useState(0)
  return (
    <Block>
      <h4>Prepare purchases for a dinner</h4>

      <button onClick={fetchPrice}>get the price for a bottle of wine</button>
      <p>Price: {priceLoading ? '...loading' : price || 'waiting'}</p>

      <p>Amount of people coming:</p>
      <input
        onChange={pipe(
          pathOr('0', ['target', 'value']),
          stringToNumber,
          setPeopleCount
        )}
      />

      <p>Price for the dinner: {getTotalPrice(price, peopleCount)}</p>
    </Block>
  )
}
