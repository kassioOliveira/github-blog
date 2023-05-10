export const formattedString = (text: string) => {
  const prase = text.split('#').join('').substring(0, 200)
  return prase
}
