const btnDisplay = document.querySelector('.btnDisplay');
const profile = document.querySelector('.profile');
const homePage = document.querySelector('.home-page');
const btnNav = document.querySelector('.navBtn');
const modal = document.querySelector('.insertName');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.closeModalBtn');

btnDisplay.addEventListener('click', function() {
  profile.classList.toggle('hidden');
  homePage.style.width ="100%";

});
// the navbar btn to display the profile in 1025px maxWidth
btnNav.addEventListener('click', function() {
  if (document.maxWidth ="1025px") {
    profile.classList.toggle('toggelBetween');
  }
});

// show modal to insert name
setTimeout(openModal = function (e) {
  // e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}, 2000);

const closeModalFn = function () {
  // e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
closeModal.addEventListener('click', closeModalFn);

// const myTimeout = (myGreeting, 5000);
//
// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
