const btnDisplay = document.querySelector('.btnDisplay');
const profile = document.querySelector('.profile');
const homePage = document.querySelector('.home-page');
const btnNav = document.querySelector('.navBtn');
const btnAddText = document.querySelector('.btn-add-text');
const textArea = document.querySelector('.addBlogText');
// const modal = document.querySelector('.insertName');
// const overlay = document.querySelector('.overlay');
// const closeModal = document.querySelector('.closeModalBtn');

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
// setTimeout(openModal = function () {
//   // e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }, 2000);

// const closeModalFn = function () {
//   // e.preventDefault();
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }
// the btn to close modal
// closeModal.addEventListener('click', closeModalFn);

// check password & email

// add a blog text to the feed section
btnAddText.addEventListener('click', function() {
    textArea.innerHTML = '<textarea class="textArea" name="name" rows="8" cols="80"></textarea>';
    textArea.style.position = "absolute";
    textArea.style.display = "inline-block";
});
