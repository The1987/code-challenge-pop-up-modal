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