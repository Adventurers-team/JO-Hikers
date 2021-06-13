'use strict'
let storiesForm = document.getElementById('stories');
let userName = document.getElementById('userName');
let storyText = document.getElementById('storyText');
let programName=document.getElementById('programName');
let button = document.getElementById('submit');
let resultsDiv = document.getElementById('results');

Story.allStories = [];

//creating a constructor function for user's data

function Story(userName,programName, storyText) {
  this.userName = userName;
  this.programName=programName;
  this.storyText = storyText;
  Story.allStories.push(this);
}

//creating an event listener for the form to handle the submit

storiesForm.addEventListener('submit', submitting);
function submitting(event) {
  event.preventDefault();
  let name = event.target.userName.value;
  let programName=event.target.programName.value;
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

  //creating a new story to save the user's input data
  new Story(name,programName,story)
  updateStorage();
  resultsDiv.textContent='';
  // render();
  storiesForm.removeEventListener('submit', submitting);
  window.location.href= "index.html";

}

//creating a new story to be shown as a first story

new Story("Toleen", "Hello there, hope you are doing well, I was a hiker in Ibn-Hammad trip, it was amazing trip with the best team ever, I will recommend this trip to my friends^^");

//storing the data in the local storage

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

//getting the user's data from the local storage
function getUsersStories() {
  let data = localStorage.getItem('stories');
  let storiesData = JSON.parse(data);
  if (storiesData !== null) {
    Story.allStories = storiesData;
  }
}

getUsersStories();

render()


// function render() {
//   for (let i = 0; i < Story.allStories.length; i++) {
//     let h3 = document.createElement('h3');
//     resultsDiv.appendChild(h3);
//     h3.textContent = Story.allStories[i].userName;
//     let paragraph = document.createElement('p');
//     resultsDiv.appendChild(paragraph);
//     paragraph.textContent = Story.allStories[i].storyText;

//   }
 
// }


getUsersStories();
// render();
