function validateRegisterForm() {
    var x = document.forms["Form"]["name"].value;
    var y = document.forms["Form"]["email"].value;
    if (x === "" || y === "") {
      alert("Name, email and password must be filled out.");
      return false;
    }}

export default validateRegisterForm    