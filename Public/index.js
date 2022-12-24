const btnDisplay = document.querySelector('.btnDisplay');
const profile = document.querySelector('.profile');
const homePage = document.querySelector('.home-page');
const btnNav = document.querySelector('.navBtn');
const btnAddText = document.querySelector('.btn-add-text');
const textArea = document.querySelector('.addBlogText');

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

// add a blog text to the feed section
btnAddText.addEventListener('click', function() {
    textArea.innerHTML = '<textarea class="textArea" name="name" rows="8" cols="80"></textarea>';
    textArea.style.position = "absolute";
    textArea.style.display = "inline-block";
});
