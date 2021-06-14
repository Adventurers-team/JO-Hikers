'use strict'
// let storiesDiv=document.getElementById('storiesDiv');

// //getting the user name and his story from the form in stories page to the home page

// function getUsersStories() {
//     let data = localStorage.getItem('stories');
//     let storiesData = JSON.parse(data);
//     if (storiesData !== null) {
//       Story.allStories = storiesData;
//     }
//   }

//   //showing the users' data on the home page after submitting the form
  
//   function render() {
//     for (let i = 0; i < Story.allStories.length; i++) {
//       let h3 = document.createElement('h3');
//       storiesDiv.appendChild(h3);
//       h3.textContent = Story.allStories[i].userName;
//       let paragraph = document.createElement('p');
//       storiesDiv.appendChild(paragraph);
//       paragraph.textContent = Story.allStories[i].storyText;
  
//     }
//   }

// getUsersStories();
// render();

// let reviewsDiv=document.getElementById('reviewsDiv');

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
  render();
  feedbackForm.removeEventListener('submit', submitReview);
  tableBody.textContent='';
  
  // window.location.href= "index.html";
}

function getUserReview() {
    let ReviewData = localStorage.getItem('reviews');
    let parsedData = JSON.parse(ReviewData);
    
    if (parsedData !== null) {
      Review.allReviews = parsedData;
    }
    console.log(Review.allReviews);
  }

  function render() {
    for (let i = 0; i < Review.allReviews.length; i++) {
      let h3 = document.createElement('h3');
      reviewsDiv.appendChild(h3);
      h3.textContent = Review.allReviews[i].userName;
      let paragraph = document.createElement('p');
      reviewsDiv.appendChild(paragraph);
      paragraph.textContent = Review.allReviews[i].reviewText;
  
    }
   
  }
  
  getUserReview();
  render();
  
  
  