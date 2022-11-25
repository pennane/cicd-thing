import { prop } from 'ramda'
import { useEffect, useState } from 'react'
import { fetchGIndex } from '../../../../api/gIndex'

const parseGIndex = (json: any) => {
  const value = Number(prop('index', json))
  if (isNaN(value)) return
  return value
}

export const useGIndex = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [gIndex, setGIndex] = useState<number>()

  useEffect(() => {
    if (!shouldFetch) return
    setLoading(true)
    fetchGIndex()
      .then(parseGIndex)
      .then(setGIndex)
      .finally(() => setLoading(false))
  }, [shouldFetch, parseGIndex, setGIndex])

  return { loading, gIndex, fetch: () => setShouldFetch(true) }
}
