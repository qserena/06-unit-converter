/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputElement = document.getElementById("number-to-convert")
const convertButton = document.getElementById("convert-btn")
const lengthResults = document.getElementById("length-results")
const volumeResults = document.getElementById("volume-results")
const massResults = document.getElementById("mass-results")

const numberOfDecimals = 3
const meterToFeet = 3.2808399
const literToGallon = 0.2641721
const kilogramToPound = 2.2046226

let numberToConvert = null

convertButton.addEventListener("click", function () {
	numberToConvert = inputElement.value
	handleLengths(numberToConvert)
	handleVolumes(numberToConvert)
	handleMasses(numberToConvert)
})

function handleLengths(numberToConvert) {
	const feet = convertLengthToFeet(numberToConvert)
	const meters = convertLengthToMeters(numberToConvert)
	lengthResults.textContent = `${numberToConvert} meters = ${feet} feet | ${numberToConvert} feet = ${meters} meters`
}

function handleVolumes(numberToConvert) {
	const gallons = convertVolumeToGallons(numberToConvert)
	const liters = convertVolumeToLiters(numberToConvert)
	volumeResults.textContent = `${numberToConvert} liters = ${gallons} gallons | ${numberToConvert} gallons = ${liters} liters`
}

function handleMasses(numberToConvert) {
	const pounds = convertMassToPounds(numberToConvert)
	const kilos = convertMassToKilos(numberToConvert)
	massResults.textContent = `${numberToConvert} kilos = ${pounds} pounds | ${numberToConvert} pounds = ${kilos} kilos`
}

function convertLengthToFeet(fromValue) {
	return (fromValue * meterToFeet).toFixed(numberOfDecimals)
}

function convertLengthToMeters(fromValue) {
	return (fromValue / meterToFeet).toFixed(numberOfDecimals)
}

function convertVolumeToGallons(fromValue) {
	return (fromValue * literToGallon).toFixed(numberOfDecimals)
}

function convertVolumeToLiters(fromValue) {
	return (fromValue / literToGallon).toFixed(numberOfDecimals)
}

function convertMassToPounds(fromValue) {
	return (fromValue * kilogramToPound).toFixed(numberOfDecimals)
}

function convertMassToKilos(fromValue) {
	return (fromValue / kilogramToPound).toFixed(numberOfDecimals)
}
