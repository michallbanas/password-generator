// Generate Password by windows.crypto method

let generatePassword = document.getElementById("btn")
let result = document.getElementById("result")
let passwordLenght = document.getElementById("lenght")

function calculation () {
    
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    let password = ""

    for (let i = 0; i<passwordLenght.value; i++) {
        let array = new Uint32Array(passwordLenght.value)
        window.crypto.getRandomValues(array)
        let generate = symbols[array[i] % 92]
        password += generate
        result.value = password 
    }
    console.log("Ďakujem, že si použil môj generátor hesiel :)")
}

generatePassword.addEventListener("click", calculation)

// Clipboard API

let copy = document.getElementById("icon")

function copyToClipboard () {
    if (!navigator.clipboard) {
        return
    }

        let content = document.getElementById("result").value

        try {
            navigator.clipboard.writeText(content)
            result.value = "Skopírované"
        } catch (err) {
            console.error("Nepodarilo sa skopírovať", err)
        } 
}

copy.addEventListener("click", copyToClipboard)