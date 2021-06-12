'use strict';
let storiesForm = document.getElementById('stories');
let userName = document.getElementById('userName');
let storyText = document.getElementById('storyText');
let button = document.getElementById('submit');

// let shopsForm = document.getElementById('shopsForm');
// shopsForm.addEventListener('submit', submitting);
// function submitting(event) {
//   event.preventDefault();
//   let name = event.target.nameField.value;
//   console.log(name);
//   let min = event.target.minCustomersField.value;
//   min=Number(min);
//   console.log(min);
//   let max = event.target.maxCustomersField.value;
//   max=Number(max);
//   console.log(max);
//   let avg = event.target.avgCookiesField.value;
//   avg=Number(avg);
//   console.log(avg);
//   let addedShop = new Shop(name, min, max, avg);
//   addedShop.randomCust();
//   addedShop.cookiesHourly();
//   addedShop.calc();
//   footerRow.textContent='';
//   addedShop.render();
//   creatingFooterRow();
// }


// ***************************
Story.allStories = [];
let userNamesArr=[];
let userStoriesArr=[];

function Story(userName, storyText){
    this.userName = userName;
    this.storyText = storyText;
    // this.userNamesArr=[];
    // this.userStoriesArr=[];
    userNamesArr.push(this.userName);
    userStoriesArr.push(this.storyText);
    Story.allStories.push(this);

}
storiesForm.addEventListener('submit', submitting);
new Story("Toleen","Hello there, hope you are doing well, I was a hiker in Ibn-Hammad trip, it was amazing trip with the best team ever, I will recommend this trip to my friends^^");
function submitting(event) {
    event.preventDefault();
    let name = event.target.userName.value;
    let story = event.target.storyText.value;
        userNamesArr.push(name);
        userStoriesArr.push(story);
        console.log(Story.allStories);
    
    Story.allStories.push(userNamesArr);
    Story.allStories.push(userStoriesArr);
    updateStorage();

    // console.log(allStories[0]+'hi');
    // console.log(userNamesArr);
    // console.log(userStoriesArr);
}

function updateStorage(){
    let storageArr=JSON.stringify(Story.allStories);
    localStorage.setItem('stories',storageArr);
    // console.log(storageArr);
    // console.log(Story.allStories);
  }

  let resultsDiv=document.getElementById('results');


  function getUsersStories(){
    let data=localStorage.getItem('stories');
    // console.log(data);
    let storiesData=JSON.parse(data);
    // console.log(storiesData);
    if(storiesData!==null){
      Story.allStories=storiesData;
      for(let i=0;i<storiesData.length;i++){
          
          let h3=document.createElement('h3');
            resultsDiv.appendChild(h3);
            h3.textContent=storiesData[i].name;
      }
        // let paragraph=document.createElement('p');
        // resultsDiv.appendChild(paragraph);
        // paragraph.textContent=Story.allStories.story;
    }

}

getUsersStories();
// function gettingUserData() {

//     let userNameData = localStorage.getItem('name');
//     if (userNameData !== null) {
        
//         console.log(userNameData);
//     }
//     let userStoryData = localStorage.getItem('story');
//     if (userStoryData !== null) {
        // let paragraph=document.createElement('p');
        // resultsDiv.appendChild(paragraph);
        // paragraph.textContent=userStoryData;

//         console.log(userStoryData);
//     }

// }

// gettingUserData();



// Check browser support
// if (typeof(Storage) !== "undefined") {
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("programming");
//     } else {
//     document.getElementById("result").innerHTML = "Browser does not support Web Storage.";
//     }


