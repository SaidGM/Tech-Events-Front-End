function validatePass() {
    var y = document.forms["Form"]["password"].value;
    var passErr = document.getElementById("error-password");
    if (y.length >= 8) {
      passErr.innerHTML = "";
      return false;
    }
    passErr.innerHTML = "Debe tener mas de 8 caracteres";
    return true;
  }

  export default validatePass
