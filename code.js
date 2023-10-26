function setSelectedRadio(id, value) {
    document.getElementById(id).value = value;
}

function submitForm() {
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

    var loader = document.createElement("div");
    loader.classList.add("loader"); // Add the "loader" class

    popup.appendChild(loader);

    document.body.appendChild(popup);
}


function showSuccessPopup() {
    var popup = document.createElement("div");
    popup.classList.add("popup"); // Add the "popup" class

    var message = document.createElement("div");
    message.innerText = "Tack för ditt svar!";

    popup.appendChild(message);

    document.body.appendChild(popup);
}
