'use strict'
let feedbackForm = document.getElementById('feedback');
let userName = document.getElementById('userName');
let phone=document.getElementById('phone')
let reviewText = document.getElementById('reviewText');
let button = document.getElementById('submit');
let reviewsDiv = document.getElementById('reviewsDiv');
let tableBody=document.getElementsByTagName('tbody')[0];

Review.allReviews = [];

//creating a constructor function for user's data

function Review(userName,phoneNumber ,reviewText) {
  this.userName = userName;
  this.phoneNumber=phoneNumber;
  this.reviewText = reviewText;
  Review.allReviews.push(this);
}

new Review('Ahmad','0' , 'Amazing website');

//creating an event listener for the form to handle the submit

feedbackForm.addEventListener('submit', submitReview)
function submitReview(event) {
  event.preventDefault();
  let name = event.target.userName.value;
  console.log(name);
  let phoneNumber=event.target.phone.value;
  console.log(phoneNumber);

  let review = event.target.reviewText.value;
  console.log(review);

  new Review(name,phoneNumber,review)
  updateReviewStorage();
  reviewsDiv.textContent='';
  //render();
  tableBody.textContent='';
  localStorage.setItem('cart',[]);
  localStorage.setItem('total',0);
  document.getElementById('total').textContent="0";

  feedbackForm.removeEventListener('submit', submitReview);
 

  
  // window.location.href= "index.html";
}
//creating a new story to be shown as a first story

//storing the data in the local storage

function updateReviewStorage() {
  let reviewStorageArr = JSON.stringify(Review.allReviews);
  localStorage.setItem('reviews', reviewStorageArr);
  
}

//getting the user's data from the local storage
function getUserReview() {
  let ReviewData = localStorage.getItem('reviews');
  let parsedData = JSON.parse(ReviewData);
  if (parsedData !== null) {
    Review.allReviews = parsedData;
  }
}
  //document.getElementById('img').setAttribute( 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==' );

// function render() {
//   for (let i = 0; i < Review.allReviews.length; i++) {
//     let h3 = document.createElement('h3');
//     reviewsDiv.appendChild(h3);
//     h3.textContent = Review.allReviews[i].userName;
//     let paragraph = document.createElement('p');
//     reviewsDiv.appendChild(paragraph);
//     paragraph.textContent = Review.allReviews[i].reviewText;

//   }
 
// }


getUserReview();
// render();
