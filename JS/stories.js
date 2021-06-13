'use strict';
let storiesForm = document.getElementById('stories');
let userName = document.getElementById('userName');
let storyText = document.getElementById('storyText');
let button = document.getElementById('submit');



Story.allStories = [];
let userNamesArr = [];
let userStoriesArr = [];

function Story(userName, storyText) {
  this.userName = userName;
  this.storyText = storyText;
  this.userNamesArr=[];
  this.userStoriesArr=[];
  userNamesArr.push(this.userName);
  userStoriesArr.push(this.storyText);
  Story.allStories.push(this);

}

storiesForm.addEventListener('submit', submitting);

function submitting(event) {
  event.preventDefault();
  let name = event.target.userName.value;
  let story = event.target.storyText.value;
  
  
new Story(name, story)

  
  userStoriesArr.push(story);
  console.log(Story.allStories);

  userNamesArr.push(name);
  userNamesArr.push(story);


  updateStorage();
  

  
  // Story.allStories.push(userNamesArr);
  // Story.allStories.push(userStoriesArr);
  render();


  // console.log(allStories[0]+'hi');
  // console.log(userNamesArr);
  // console.log(userStoriesArr);
}
// new Story("Toleen", "Hello there, hope you are doing well, I was a hiker in Ibn-Hammad trip, it was amazing trip with the best team ever, I will recommend this trip to my friends^^");



function updateStorage() {

  let storageArr = JSON.stringify(Story.allStories);
  localStorage.setItem('stories', storageArr);
  
  // let nameArr= JSON.stringify(Story.allStories);
  // localStorage.setItem('userName', nameArr);

  
  

}


let resultsDiv = document.getElementById('results');
function render() {
  console.log(Story.allStories);
  for (let i = 0; i <Story.allStories.length; i++) {

    let h3 = document.createElement('h3');
    resultsDiv.appendChild(h3);
    h3.textContent = Story.allStories[i].userName;
    let paragraph = document.createElement('p');
    resultsDiv.appendChild(paragraph);
    paragraph.textContent = Story.allStories[i].storyText;
    // userNamesArr=[];
    // userStoriesArr=[];


  }

}

function getUsersStories() {
  
  
  let data = localStorage.getItem('stories');

  let storiesData = JSON.parse(data);
  
  if (storiesData !== null) {
    Story.allStories = storiesData;
    console.log(Story.allStories[0]);
    console.log(storiesData);



  }

}
getUsersStories();

render()


// let array1 = [1,2,3]
// document.getElementById('submit').onclick=function(){
//   sessionStorage.setItem('theArray',JSON.stringify(array1));
//   window.location.href='index.html';

// }