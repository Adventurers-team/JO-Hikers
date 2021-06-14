'use strict';

const cart = new Cart([]);

let pricearray = [];
// let quantityarray=[];
// let quantity=0;
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('allprograms');

  //let price=0;
  for (let i in Product.allProducts) {

    // console.log("hi");
    // let = document.createElement('option');

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


    selectElement.appendChild(btn);
    selectElement.appendChild(quantity);


    btn.name = Product.allProducts[i].name;
    pricearray[i] = Product.allProducts[i].price;

    // checkboxarray.push(checkbox);
    // quantityarray.push(quantity);
    //  console.log(quantity.value+"tr");
    // console.log(quantityarray[0]);

  }}

// }
// //console.log(quantityarray);
// let newquant = [];
let newPrice = [];
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
      newPrice.push(price);
      newPrice1=price * quantity;
      totalPrice=totalPrice+newPrice1;

     localStorage.setItem('total',JSON.stringify(totalPrice));


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
renderCode();
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.