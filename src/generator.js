export const generatePassword = (length) => {
  const characterSet = []
  for (let i = 33; i <= 126; i++) {
    characterSet.push(String.fromCharCode(i))
  }

  const passwordArray = new Uint32Array(length)
  crypto.getRandomValues(passwordArray)

  const password = Array.from(
    passwordArray,
    (value) => characterSet[value % characterSet.length],
  ).join("")
  return password
}

const MIN_LENGTH = 8
const MAX_LENGTH = 24

export const checkLength = (length) => {
  if (isNaN(length) || length < MIN_LENGTH) {
    return `Min. length is ${MIN_LENGTH} characters`
  }
  if (length > MAX_LENGTH) {
    return `Max. length is ${MAX_LENGTH} characters`
  }
  return ""
}
