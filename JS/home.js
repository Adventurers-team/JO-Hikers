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
// gt the reviews from the local storage


  
// let myElement = document.getElementById('myImg'),

// myImgs =['img/wadirum.jpg','img/inaba3.jpg','img/wadirum3.jpg','img/alazraq3.jpg','img/alazraq1.jpg','img/dibeen1.jpg','img/ibnhammad3.jpg','img/inaba2.jpg'
// ];

// function changeImage(myElement, myImgs){

//     setInterval(function(){
//         let myRandomNum =Math.floor(Math.random()*myImgs.length);
//         myElement.src =myImgs[myRandomNum];
//     }, 3000)
// }
// changeImage(myElement, myImgs);
// console.log(changeImage);
// let myImgs =['img/wadirum.jpg','img/wadirum2.jpg','img/wadirum3.jpg','img/alarayslake1.jpg','img/alarayslake2.jpg','img/alarayslake3.jpg'
// ];
// let main= document.getElementById('main');
// console.log(main)
// // background-image: url();
// let myRandomNum =Math.floor(Math.random()*myImgs .length);
// main.style.background=`url('${myImgs[myRandomNum]}')  no-repeat`
// // let myElement = document.querySelectorAll('.myImg');

// setInterval(()  => {

//   myElement.style.backgroundImage='url ("img/' + myImgs[myRandomNum]+');

// },1000);


//////////////////////////////////////////////////////////////////////////////////////

// let reviewsDiv=document.getElementById('reviewsDiv');

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
  
/////////////////////////////////////////////////////////////////////////////////
function pageRedirect() {
  window.location.href = "programs.html";
} 
