const cookie = document.querySelector(".cookie-modal");
const btnCookie = document.querySelector(".btn-cookie");

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  cookie.classList.remove('hidden');
}
btnCookie.addEventListener('click', function() {
  cookie.classList.add('hidden');
});
