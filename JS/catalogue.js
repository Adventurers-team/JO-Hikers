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
 let checkbox = document.createElement("INPUT");
 let quantity=document.createElement('number');
 checkbox.setAttribute("type", "checkbox");

 selectElement.appendChild(quantity);
  selectElement.appendChild(checkbox);

  checkbox.name=Product.allProducts[i].name;
 
  checkboxarray.push(checkbox);
  quantityarray.push(quantity);

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


  for (let i = 0; i < checkboxarray.length; i++) {
    
    
    if (checkboxarray[i].checked) {

        checkedbox.push(checkboxarray[i]);

        for (let j = 0; j < checkedbox.length; j++) {

            cart.addItem(checkboxarray[i].name,quantityarray[j])

            
        }
        
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
}

let count=0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  
  let counter=document.getElementById("itemCount");
  console.log(count+'try');

  count=cart.items.length;
  
  //counter.textContent=count;
  console.log(counter);


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