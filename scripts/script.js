

// Event Listener #1 - When user clicks on the grey area (body) run 'closeModal' //
document.body.addEventListener('click', closeModal, true);

function closeModal(event) {
  

  if (event.target.id === "wrapper" || event.target.id === "body_id" || event.target.id === "cta-2" ||  event.target.id === "x_button") {
    var x = document.getElementById('sub-container');
    x.style.display = 'none';

    var y = document.getElementById('hidden-container');
    y.style.display = 'block';
  }
}

// Event Listener #2 - When hidden container button is clicked run function 'openModal' //
document.getElementById("hidden-container").addEventListener("click", openModal);

function openModal() {
  var y = document.getElementById('hidden-container');
  y.style.display = 'none';

  var x = document.getElementById('sub-container');
  x.style.display = 'block';
}


// Form Validation Rule #1 - If input has no value disable button //
function inputChecker() {
  if (document.getElementById("email").value === "") {
    document.getElementById('submit').disabled = true;
  } else {
    document.getElementById('submit').disabled = false;
  }
}

// Form Validation Rule #2 - Review input text //
document.getElementById("submit").addEventListener("click", ValidateEmail);
function ValidateEmail() {
  var inputText = document.getElementById("email").value
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  }
  else {
    document.getElementById("error-messsage").innerHTML = "Please enter in a valid email."
    return false;
  }
}