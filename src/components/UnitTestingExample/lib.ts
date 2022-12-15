import { concat, pipe, __ } from 'ramda'
import { BOTTLES_OF_WINE_PER_PERSON } from '../../constants'

export const stringToNumber = (s: string) => parseFloat(s)
const toFixed = (decimals: number) => (n: number) => n.toFixed(decimals)

export const getBottlesCount = (people = 0) =>
  Math.ceil(people * BOTTLES_OF_WINE_PER_PERSON)

export const getTotalPrice = (price = 0, bottleCount = 0) =>
  price * bottleCount * 0.8


export const toEur = pipe(toFixed(2), concat(__, ' €'))

