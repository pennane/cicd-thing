import { expect, test, describe } from 'vitest'
import { fetchGIndex } from '../api/gIndex'
import { parseGIndex } from '../components/UnitTestingExample/hooks/useGIndex'
import { getTotalPrice } from '../components/UnitTestingExample/lib'

describe('Wine bottle acquisition', () => {
  test('It should fetch the price for single bottle', async () => {
    const data = await fetchGIndex()
    const price = parseGIndex(data)

    expect(price).toBeGreaterThan(0)
  })
  test('It should count the total price correctly', async () => {
    const PRICE = 10
    const PEOPLE_COUNT = 10

    const EXPECTED_OUTPUT = PEOPLE_COUNT * PRICE

    expect(getTotalPrice(PRICE, PEOPLE_COUNT)).eq(EXPECTED_OUTPUT)
  })
})
