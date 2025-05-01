// locate elements
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.querySelector("input")

// results elements
const lengthConverterEl = document.getElementById("length-convert")
const volumeConverterEl = document.getElementById("volume-convert")
const massConverterEl = document.getElementById("mass-convert")


function lengthConverter(val) {
    const toFeet = val * 3.281
    const toMeter = val * 0.3048
    const str = `${val} meters = ${toFeet.toFixed(3)} feet | ${val} feet = ${toMeter.toFixed(3)} meters`
    lengthConverterEl.textContent = str
}

function volumeConverter(val) {
    const toGallon = val * 0.264
    const toLiter = val * 3.78541
    const str = `${val} liters = ${toGallon.toFixed(3)} gallons | ${val} gallons = ${toLiter.toFixed(3)} liters`
    volumeConverterEl.textContent = str
}

function massConverter(val) {
    const toPound = val * 2.204
    const toKilo = val * 0.453592
    const str = `${val} kilos = ${toPound.toFixed(3)} pounds | ${val} feet = ${toKilo.toFixed(3)} meters`
    massConverterEl.textContent = str
}

convertBtn.addEventListener("click", () => {
    let val = Number(inputEl.value)
    if (val) {
        lengthConverter(val)
        volumeConverter(val)
        massConverter(val)
    } else {
        alert("Please, Enter valid Number.")
    }


})
