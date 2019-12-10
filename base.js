var pictureDiv = document.querySelector('.pictureDiv');
var slideShow = document.querySelectorAll('.slideShow img');

var nextButton = document.querySelector('nextButton');
var previousButton = document.querySelector('previousButton');

let counter = 1;
var size = slideShow[0].clientwidth;

pictureDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
  if (counter >= slideShow.length - 1) return;
  pictureDiv.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  pictureDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousButton.addEventListener('click', () => {
  if (counter <= 0) return;
  pictureDiv.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  pictureDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

pictureDiv.addEventListener('transitioned', () => {
if (slideShow[counter].id === 'lastClone') {
  pictureDiv.style.transition = 'none';
  counter = slideShow.length - 2;
  pictureDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if (slideShow[counter].id === 'firstClone') {
  pictureDiv.style.transition = 'none';
  counter = slideShow.length - counter;
  pictureDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});
