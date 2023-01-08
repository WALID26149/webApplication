// hide and show password
const showHide = document.querySelector('.show-hide');
showHide.addEventListener('click', function() {
  const password = document.querySelector(".passwordInput");
  if (password.type === "password") {
    return password.type = "text";
  }
  password.type = "password";
});
