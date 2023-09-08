const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Number = document.getElementById("number");
const Password = document.getElementById("password");
const Cpassword = document.getElementById("cpassword");
const Lname = document.getElementById("lname");
const Lemail = document.getElementById("lemail");
const Lnumber = document.getElementById("lnumber");
const Lpassword = document.getElementById("lpassword");
const Lcpassword = document.getElementById("lcpassword");
const Form = document.getElementById("form");
const Checkbox = document.getElementById("checkbox");
const Button = document.getElementById("button");
let Namebool = false;
let Emailbool = false;
let Numberbool = false;
let Passwordbool = false;
let Cpasswordbool = false;
let Checkboxbool = false;

const validation = (input) => {
  switch (input) {
    case "name":
      if (Name.value.trim() == "") {
        Lname.innerHTML = "*this field is required";
        Form.addEventListener("submit", function (event) {
          event.preventDefault();
        });
      } else if (Name.value.trim().length < 5) {
        Name.style.border = "solid red 1.5px";
        Lname.innerHTML = "*must need 5 characters";
      } else {
        Lname.innerHTML = "";
        Name.style.border = "";
        Namebool = true;
      }
      break;

    case "email":
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailRegex.test(Email.value)) {
        Email.style.border = "";
        Lemail.innerHTML = "";
        Emailbool = true;
      } else {
        Email.style.border = "solid red 1.5px";
        Lemail.innerHTML = "*please provide a valid email";
      }
      break;

    case "number":
      if (Number.value.length != 10) {
        Number.style.border = "solid red 1.5px";
        Lnumber.innerHTML = "*please provide a valid number";
      } else {
        Number.style.border = "";
        Lnumber.innerHTML = "";
        Phonebool = true;
      }
      break;

    case "password":
      if (
        Password.value.match(/[a-z]/g) &&
        Password.value.match(/[A-Z]/g) &&
        Password.value.match(/[0-9]/g) &&
        Password.value.match(/[^a-zA-Z\d]/g) &&
        Password.value.length >= 8
      ) {
        Password.style.border = "";
        Lpassword.innerHTML = "";
        Passwordbool = true;
      } else {
        Password.style.border = "solid red 1.5px";
        Lpassword.innerHTML =
          "*must contain uppercase, lowercase, number and a special character";
      }
      break;

    case "cpassword":
      if (Cpassword.value !== Password.value) {
        Cpassword.style.border = "solid red 1.5px";
        Lcpassword.innerHTML = "*confirm password does not match";
      } else {
        Cpassword.style.border = "";
        Lcpassword.innerHTML = "";
        Cpasswordbool = true;
      }
      break;

    case "checkbox":
      if (Checkbox.checked) {
        Checkboxbool = true;
      }
    default:
  }
};

const redirect = (event) => {
  event.preventDefault();
  if (
    Namebool === true &&
    Namebool === true &&
    Emailbool === true &&
    Passwordbool === true &&
    Cpasswordbool === true &&
    Checkboxbool === true
  ) {
    window.location.href = "welcome.html";
  }
};
