// Generovanie hesla

let generujHeslo = document.getElementById("btn")
let výsledok = document.getElementById("výsledok")
let dĺžkaHesla = document.getElementById("lenght")

function výpočet () {
    let písmená = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*_-+=?!"
    let heslo = ""

    for (let i = 0; i<dĺžkaHesla.value; i++) {
        let generuj = písmená[Math.floor(Math.random() * 73)]
        heslo += generuj
        výsledok.value = heslo 
    }
}

generujHeslo.addEventListener("click", výpočet)

// Clipboard API

let kopírovať = document.getElementById("icon")

function copyToClipboard () {
    if (!navigator.clipboard) {
        return
    }

        let obsah = document.getElementById("výsledok").value

        try {
            navigator.clipboard.writeText(obsah)
            výsledok.value = "Skopírované"
        } catch (err) {
            console.error("Nepodarilo sa skopírovať", err)
        } 
}

kopírovať.addEventListener("click", copyToClipboard)