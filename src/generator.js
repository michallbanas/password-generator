// Generate Password 

const passwordGeneratorConsts = {
    result: document.getElementById("result"),
    length: document.getElementById("length"),
    generateButton: document.getElementById("generateBtn"),
    copyButton: document.getElementById("copyBtn"),
    symbols: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    finalPassword: ""
}

const calculation = ({
    result,
    length,
    generateButton,
    symbols,
    finalPassword
}) => {
    
    const generatePassword = () => {
        const array = new Uint32Array(length.value)
        crypto.getRandomValues(array)
        array.map((char) => {
            finalPassword += symbols.charAt(char % symbols.length)
        })
        result.value = finalPassword
        finalPassword = ""
    }

    const checkLengthMin = () => {
        if (length.value < 12) {
            result.value = "Minimálna dĺžka hesla je 8 znakov"
        }
    }

    const checkLengthMax = () => {
        if (length.value > 24) {
            result.value = "Maximálna dĺžka hesla je 24 znakov"
        }
    }
   
    generateButton.addEventListener("click", () => {
        generatePassword()
        checkLengthMin()
        checkLengthMax()
    } )
}

calculation(passwordGeneratorConsts)

// Clipboard API

const copyToClipboard = ({ copyButton, result }) => {
    const api = () => {
        try {
            navigator.clipboard.writeText(result.value)
            result.value = "Heslo bolo skopírované do schránky"
    } catch (error) {
        console.log(error)
    }
}
   copyButton.addEventListener("click", () => {
       api()
   })
}

copyToClipboard(passwordGeneratorConsts)
