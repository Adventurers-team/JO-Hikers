'use strict';

const cart = new Cart([]);


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('allprograms');

 
  for (let i in Product.allProducts) {

 // console.log("hi");
 // let = document.createElement('option');
 
 let quantity = document.createElement("INPUT");
 quantity.setAttribute("type", "number");
 quantity.setAttribute("value", "");
 let value=quantity.getAttribute("value");
 document.write(value);
 console.log(value);
 let checkbox = document.createElement("INPUT");
 
 checkbox.setAttribute("type", "checkbox");

 selectElement.appendChild(checkbox);
 selectElement.appendChild(quantity);
  
  checkbox.name=Product.allProducts[i].name;
 
  checkboxarray.push(checkbox);
  quantityarray.push(quantity);
  //  console.log(quantity.value+"tr");
  // console.log(quantityarray[0]);

  }

}

let checkboxarray=[];

let quantityarray=[];

let checkedbox=[];


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  //updateCartPreview();

}


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let quant=0;

  for (let i = 0; i < checkboxarray.length; i++) {
    // console.log(i+"first");
    
    if (checkboxarray[i].checked) {
      // console.log(i+"first");
    
        checkedbox.push(checkboxarray[i]);

        //  for (let j = 0; j < quantityarray.length; j++) {
        //  quant=  quantityarray[j];
        //  console.log(quant+"forresult")

            // cart.addItem(checkboxarray[i].name,3)
          // }
          cart.addItem(checkboxarray[i].name,3)
        // console.log(quant+"result"); 
        checkboxarray[i]=false;}
        
    }
      
  }
//let selectItem=document.getElementById("items").value;
//let quant=document.getElementById("quantity").value;
  //console.log(selectItem);
//console.log(quant);
// new CartItem(selectItem,quant);
//cart.addItem(selectItem,quant);

// count++;
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart


let count=0;
// // TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  
  let counter=document.getElementById("itemCount");
  // console.log(count+'try');

  count=cart.items.length;
  
  //counter.textContent=count;
  console.log(count+"count");


}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// function updateCartPreview() {

//   let selectItem=document.getElementById("items").value;
//   let quant=document.getElementById("quantity").value;
 

//   let cartContents = document.getElementById('cartContents');
//   console.log(cartContents);

//   let ul = document.createElement('ul');
//   cartContents.appendChild(ul);
//   let li = document.createElement('li');
//   ul.appendChild(li);

//   li.textContent=`The item is, ${selectItem} and the quantity is ${quant}`;
  


//   // TODO: Get the item and quantity from the form
//   // TODO: Add a new element to the cartContents div with that information
// }

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();