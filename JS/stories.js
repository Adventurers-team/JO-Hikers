'use strict'
let storiesForm = document.getElementById('stories');
let userName = document.getElementById('userName');
let storyText = document.getElementById('storyText');
let programs=document.getElementById('programs');
let button = document.getElementById('submit');
let resultsDiv = document.getElementById('results');
let picture=document.getElementById('picture');



Story.allStories = [];

function Story(userName,programs, storyText,picture) {
  this.userName = userName;
  this.programs=programs;
  this.storyText = storyText;
  this.picture= picture;
  Story.allStories.push(this);
}


storiesForm.addEventListener('submit', submitting);
function submitting(event) {
  event.preventDefault();
  let name = event.target.userName.value;
  let programs=event.target.programs.value;
  let story = event.target.storyText.value;
  let picture=event.target.picture.value;


  new Story(name,programs,story,picture)
  updateStorage();
  resultsDiv.textContent='';
  render();
  storiesForm.removeEventListener('submit', submitting);

}


new Story("Toleen",' ' ,"Hello there, hope you are doing well, I was a hiker in Ibn-Hammad trip, it was amazing trip with the best team ever, I will recommend this trip to my friends^^" , '');


function updateStorage() {
  let storageArr = JSON.stringify(Story.allStories);
  localStorage.setItem('stories', storageArr);
  
}

function getUsersStories() {
  let data = localStorage.getItem('stories');
  let storiesData = JSON.parse(data);
  if (storiesData !== null) {
    Story.allStories = storiesData;
  }
}

function render() {
  for (let i = 0; i < Story.allStories.length; i++) {
    let newDiv=document.createElement('div');
    newDiv.setAttribute("id", `div${i}`);
    resultsDiv.appendChild(newDiv);
    let h3 = document.createElement('h3');
    h3.setAttribute("id", `h${i}`);
    newDiv.appendChild(h3);
    h3.textContent = Story.allStories[i].userName;

    let paragraph = document.createElement('p');
    paragraph.setAttribute("id", `para${i}`);
    newDiv.appendChild(paragraph);
    paragraph.textContent = Story.allStories[i].storyText;
    let img=document.createElement('img');
    img.setAttribute("id", `pic${i}`);
    newDiv.appendChild(img);
    img.setAttribute('src' ,Story.allStories[i].picture);
    
  }
 
}

function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}


getUsersStories();
render();

on();
off();
