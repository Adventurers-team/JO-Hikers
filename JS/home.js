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

