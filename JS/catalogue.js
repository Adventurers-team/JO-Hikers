'use strict';

const cart = new Cart([]);
let container= document.getElementById('container')

let pricearray = [];
// let quantityarray=[];
// let quantity=0;
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  //let price=0;
  // for (let i in Product.allProducts) {

  //   // console.log("hi");
  //   // let = document.createElement('option');

  //   let quantity = document.createElement("INPUT");
  //   quantity.setAttribute("type", "number");

  //   quantity.setAttribute("id", `in${i}`);
  //   quantity.setAttribute("value", "");

  //   // let value=quantity.getAttribute("value");

  //   //  document.write(value);
  //   //  console.log(value);
  //   let btn = document.createElement("button");
  //   btn.innerHTML = "Add to Cart";
  //   btn.setAttribute("type", "button");
  //   btn.setAttribute("id", `bt${i}`);


  //   selectElement.appendChild(btn);
  //   selectElement.appendChild(quantity);


  //   btn.name = Product.allProducts[i].name;
  //   pricearray[i] = Product.allProducts[i].price;

  //   // checkboxarray.push(checkbox);
  //   // quantityarray.push(quantity);
  //   //  console.log(quantity.value+"tr");
  //   // console.log(quantityarray[0]);

  // }
}

// }
// //console.log(quantityarray);
// let newquant = [];
// let newPrice = [];
let totalPrice = 0;
let newPrice1 = 1;

function renderCode() {

  for (let i = 0; i < 7; i++) {

    
    document.getElementById(`bt${i}`).addEventListener("click", display);


    let name = Product.allProducts[i].name;
    let price = Product.allProducts[i].price;
    console.log(name);
    
    console.log(price);
      
      
    //  quantity.preventDefault();

  }}
    //  if(document.getElementById(`bt${i}`).clicked == true){
    
      function display(e) {
        // document.getElementById("demo").innerHTML = Date();
      let myId = e.target.id;
      console.log(myId);
      let idx = `in${myId[2]}`
      let price=Product.allProducts[Number(myId[2])].price;
      let name=Product.allProducts[Number(myId[2])].name;
      let quantity = document.getElementById(idx).value;
      // newquant.push(quantity);
      console.log(quantity);
      // console.log(newquant);
      // newPrice.push(price);
      newPrice1=price * quantity;
      totalPrice=totalPrice+newPrice1;
      // if (newquant.length!=0){
      // } else{
      // document.getElementById(`bt${i}`).disabled = true;
      // }
      cart.addItem(name,quantity,newPrice1);
      cart.saveToLocalStorage();
      document.getElementById(myId).removeEventListener("click",display)
      //  }
      }
      function handleSubmit(event) {
        event.preventDefault();  
        // TODO: Prevent the page from reloading
        // event.preventDefault();
        // Do all the things ...
        // addSelectedItemToCart();
        cart.saveToLocalStorage();
        // updateCartPreview();
      }

// TODO: get the quantity
// TODO: using those, add one item to the Cart


let count = 0;
// // TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  let counter = document.getElementById("itemCount");
  // console.log(count+'try');

  count = cart.items.length;

  //counter.textContent=count;
  console.log(count + "count");


}


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');

populateForm();
// renderCode();
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.



function render(){
  for (let i = 0; i < 7; i++) {
// 1. get the container by id
// 2. create a divElement for each object
// 3. create p and append it to the divElement
// 4. create imgs and append them tp the divElement
// 5. create inputs for the quantity and buttons and append them to the divElement 

    const selectElement = document.getElementById('allprograms');

    const divElement = document.createElement('div');
    selectElement.appendChild(divElement);

    // let price1= Product.allProducts[i].price
    // pricearray[i] = Product.allProducts[i].price;
    let title = document.createElement('h2')
    // divElement.appendChild(price1);
    
    divElement.appendChild(title);
    
    title.textContent=Product.allProducts[i].name;
    console.log(title);

    
    let pic= document.createElement('img');

    divElement.appendChild(pic);
    pic.src= Product.allProducts[i].filePath;
    console.log(pic);

    let para= document.createElement('p')
    divElement.appendChild(para);
    para.textContent=Product.allProducts[i].paragraph;

    let price1=document.createElement('number');
    divElement.appendChild(price1)
    price1.textContent=` price :  ${Product.allProducts[i].price} JOD`



    let quantity = document.createElement("INPUT");
    quantity.setAttribute("type", "number");

    quantity.setAttribute("id", `in${i}`);
    quantity.setAttribute("value", "");

    // let value=quantity.getAttribute("value");

    //  document.write(value);
    //  console.log(value);
    let btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";
    btn.setAttribute("type", "button");
    btn.setAttribute("id", `bt${i}`);


    divElement.appendChild(btn);
    divElement.appendChild(quantity);


    btn.name = Product.allProducts[i].name;

    document.getElementById(`bt${i}`).addEventListener("click", display);


    let name = Product.allProducts[i].name;
    let price = Product.allProducts[i].price;
    console.log(name);
    
    console.log(price);

    

  }
  
}

render();