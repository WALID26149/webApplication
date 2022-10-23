const btnDisplay = document.querySelector('.btnDisplay');
const profile = document.querySelector('.profile');
const homePage = document.querySelector('.home-page');

btnDisplay.addEventListener('click', function() {
  profile.classList.toggle('hidden');
  homePage.style.width ="100%";
  // if (document.maxWidth ="1025px") {
  //   profile.style.display = "block";
  //   profile.style.display = "none"
  // }
});
