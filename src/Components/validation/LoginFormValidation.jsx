function validateLoginForm() {
    var x = document.forms["Form"]["Email"].value;
    if (x === "") {
      alert("Name must be filled out.");
      return false;
    }
  }

export default validateLoginForm  