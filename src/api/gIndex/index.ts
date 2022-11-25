export const fetchGIndex = (): Promise<{ index: string }> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index: '10.99' })
    }, 2500)
  })
