import { generatePassword, checkLength } from "./generator.js"

const generateButton = document.getElementById("generateBtn")
const lengthInput = document.getElementById("length")
const result = document.getElementById("result")

const clearResult = () => {
  result.value = ""
}

generateButton.addEventListener("click", () => {
  const length = parseInt(lengthInput.value)
  const lengthError = checkLength(length)
  if (lengthError) {
    result.value = lengthError
  } else {
    const password = generatePassword(length)
    result.value = password
  }
})

const removeGenerateClickListener = () => {
  generateButton.removeEventListener("click", clearResult)
}

const copyButton = document.getElementById("copyBtn")

copyButton.addEventListener("click", async () => {
  if (result.value && !result.className) {
    await copyToClipboard({ result })
  } else {
    generateButton.setAttribute("disabled", true)
    result.className = "resultError"
    result.value = "You can't copy empty value"
  }

  setTimeout(() => {
    generateButton.removeAttribute("disabled")
    result.className = ""
    clearResult()
  }, 2000)
})

const copyToClipboard = async ({ result }) => {
  try {
    await navigator.clipboard.writeText(result.value)
    result.value = "Password copied!"
    generateButton.setAttribute("disabled", true)
    removeGenerateClickListener()
    setTimeout(clearResult, 2000)
  } catch (error) {
    console.error("Failed to copy password:", error)
  }
}
