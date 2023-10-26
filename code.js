function setSelectedRadio(id, value) {
    document.getElementById(id).value = value;
}

function submitForm() {
    document.getElementById('myButton').disabled = true;
    document.getElementById('form').submit();
}