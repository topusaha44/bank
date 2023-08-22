function getInputFieldValueById(inputFiendId) {
    const inputField = document.getElementById(inputFiendId)
    const inputString = inputField.value
    const inputConvert = parseFloat(inputString)
    inputField.value = ''
    return inputConvert
}

function getElementValueByid(elementId) {
    const element = document.getElementById(elementId)
    const value = element.innerText
    const valueConvert = parseFloat(value)
    return valueConvert
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue

}