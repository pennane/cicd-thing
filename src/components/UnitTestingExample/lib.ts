import { BOTTLES_OF_WINE_PER_PERSON } from '../../constants'

export const stringToNumber = (s: string) => parseInt(s)

export const getBottlesCount = (people = 0) =>
  Math.ceil(people * BOTTLES_OF_WINE_PER_PERSON)

export const getTotalPrice = (price = 0, bottleCount = 0) => price * bottleCount
