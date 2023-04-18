function validateEmail() {
    var emailField = document.getElementById("user-email");
    var emailError = document.getElementById("error-msg");
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (validEmail.test(emailField.value)) {
      emailError.innerHTML = "";
      return true;
    } else {
      emailError.innerHTML = "El email es invalido";
      return false;
    }
  }

export default validateEmail