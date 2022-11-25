type TGIndexData = { index: string }

export const fetchGIndex = (): Promise<TGIndexData> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index: '10.99' })
    }, 2500)
  })
