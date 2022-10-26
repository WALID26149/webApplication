const btnDisplay = document.querySelector('.btnDisplay');
const profile = document.querySelector('.profile');
const homePage = document.querySelector('.home-page');
const btnNav = document.querySelector('.navBtn')

btnDisplay.addEventListener('click', function() {
  profile.classList.toggle('hidden');
  homePage.style.width ="100%";

});
btnNav.addEventListener('click', function() {
  if (document.maxWidth ="1025px") {
    profile.classList.toggle('toggelBetween');
  }
});
