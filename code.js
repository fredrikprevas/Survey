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

    popup.style.backgroundImage = 'url("images/hand3.jpg")';
    popup.style.backgroundSize = 'cover';

    var loader = document.createElement("div");
    loader.classList.add("loader"); // Add the "loader" class

    popup.appendChild(loader);

    document.body.appendChild(popup);
}




function showSuccessPopup() {
  var popup = document.createElement("div");
  popup.classList.add("popup");

  popup.style.backgroundImage = 'url("images/bild2.jpg")';
  popup.style.backgroundSize = 'cover';

  var topContent = document.createElement("div");
  topContent.classList.add("top-content");

  var message = document.createElement("div");
  message.innerText = "Tack för ditt svar! \n Lär dig mer på www.Prevas.se";
  message.classList.add("message");

  var timerMessage = document.createElement("div");
  timerMessage.id = "timerMessage";
  timerMessage.classList.add("timer-message");

  topContent.appendChild(message);
  topContent.appendChild(timerMessage);

  popup.appendChild(topContent);

  document.body.appendChild(popup);

  // Position elements
  topContent.style.position = "absolute";
  topContent.style.top = "10px";
  topContent.style.left = "50%";
  topContent.style.transform = "translateX(-50%)";
}