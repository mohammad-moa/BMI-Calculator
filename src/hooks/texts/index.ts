import EnText from '@assets/texts/en.json'

type Text = keyof typeof EnText

export const useText = () => {
  const TX = (value: Text, subset?: string | string[]): string => {
    const text = EnText[value]
    if (!subset) return text

    const subsetsArray = Array.isArray(subset) ? subset : [subset]

    return text.replace(/\{(\d+)\}/g, (match, number) => {
      const index = parseInt(number) - 1
      return subsetsArray[index] !== undefined ? subsetsArray[index] : match
    })
  }

  return { TX }
}
