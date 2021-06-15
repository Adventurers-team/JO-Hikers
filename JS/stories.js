'use strict'
let storiesForm = document.getElementById('stories');
let userName = document.getElementById('userName');
let storyText = document.getElementById('storyText');
let programs=document.getElementById('programs');
let button = document.getElementById('submit');
let resultsDiv = document.getElementById('results');
let picture=document.getElementById('picture');



Story.allStories = [];

//creating a constructor function for user's data

function Story(userName,programs, storyText,picture) {
  this.userName = userName;
  this.programs=programs;
  this.storyText = storyText;
  this.picture= picture;
  Story.allStories.push(this);
}


//creating an event listener for the form to handle the submit

storiesForm.addEventListener('submit', submitting);
function submitting(event) {
  event.preventDefault();
  let name = event.target.userName.value;
  let programs=event.target.programs.value;
  let story = event.target.storyText.value;
  let picture=event.target.picture.value;

  // console.log(event);
  
  //creating a new story to save the user's input data
  new Story(name,programs,story,picture)
  updateStorage();
  resultsDiv.textContent='';
  render();
  storiesForm.removeEventListener('submit', submitting);
  // window.location.href= "index.html";

}

//creating a new story to be shown as a first story

new Story("Toleen",' ' ,"Hello there, hope you are doing well, I was a hiker in Ibn-Hammad trip, it was amazing trip with the best team ever, I will recommend this trip to my friends^^" , '');

//storing the data in the local storage

function updateStorage() {
  let storageArr = JSON.stringify(Story.allStories);
  localStorage.setItem('stories', storageArr);
  
}

//getting the user's data from the local storage
function getUsersStories() {
  let data = localStorage.getItem('stories');
  let storiesData = JSON.parse(data);
  if (storiesData !== null) {
    Story.allStories = storiesData;
  }
}
  // document.getElementById('img').setAttribute( 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==' );

function render() {
  for (let i = 0; i < Story.allStories.length; i++) {
    let newDiv=document.createElement('div');
    newDiv.setAttribute("id", `div${i}`);
    resultsDiv.appendChild(newDiv);
    let h3 = document.createElement('h3');
    h3.setAttribute("id", `h${i}`);
    newDiv.appendChild(h3);
    // resultsDiv.appendChild(h3);
    h3.textContent = Story.allStories[i].userName;
    let paragraph = document.createElement('p');
    paragraph.setAttribute("id", `para${i}`)
    newDiv.appendChild(paragraph);
    // resultsDiv.appendChild(paragraph);
    paragraph.textContent = Story.allStories[i].storyText;
    let img=document.createElement('img');
    img.setAttribute("id", `pic${i}`);
    newDiv.appendChild(img);
    // resultsDiv.appendChild(img);
    img.setAttribute('src' ,Story.allStories[i].picture);
  }
 
}

getUsersStories();
render();
