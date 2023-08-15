function inputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value ;
    inputField.value ='';
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setInnerText(id, newValue){
    const element = document.getElementById(id);
    element.innerText = newValue;
}
