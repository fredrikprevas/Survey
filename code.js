function setSelectedRadio(id, value) {
    document.getElementById(id).value = value;
}

function submitForm() {

  var inputElement = document.getElementById('Utslagid');
  var hiddenElement = document.getElementById('Utslag');
  var inputValue = inputElement.value;
  var replacedValue = inputValue.replace(/\./g, ',');
  hiddenElement.value = replacedValue;


  document.getElementById('myButton').disabled = true;
  //document.getElementById('form').submit();
  LoadingPopup()

  var formData = new FormData(document.getElementById('form'));

  fetch('https://script.google.com/macros/s/AKfycbz1FSrr05jRQQQANoM86jomuoPAix-JcnqgRhIXo_x5n4oOCz-_R2pWOJM0Api34XsL/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from your Google Apps Script
    if (data.result === 'success') {
      showSuccessPopup();
    } else {
      showErrorPopup(data.error);
    }
  })
  .catch(error => {
    // Handle errors
  });

}

function LoadingPopup() {
  var popup = document.createElement("div");
  popup.classList.add("popup"); // Add the "popup" class

  popup.style.backgroundImage = 'url("images/hand_downscale.jpg")';
  popup.style.backgroundSize = 'cover';

  var loader = document.createElement("div");
  loader.classList.add("loader"); // Add the "loader" class

  popup.appendChild(loader);

  document.body.appendChild(popup);
}

function showSuccessPopup() {
  window.location.href = "tack.html";
}

