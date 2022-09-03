const btnAddPhoto = document.querySelector(".btn-add-photos");
const postImg = document.querySelector(".post-img");
const openModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

btnAddPhoto.addEventListener('click', function(){
  alert('hello im clicked')
});

// open modal
postImg.addEventListener('click', function() {
  openModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// class testCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
// }
//
// const ageCalc = new testCl('angela', 2006);
// ageCalc.calcAge();
