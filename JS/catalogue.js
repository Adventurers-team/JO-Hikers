'use strict';

const cart = new Cart([]);

let pricearray=[];
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('allprograms');

 //let price=0;
  for (let i in Product.allProducts) {

 // console.log("hi");
 // let = document.createElement('option');

 let quantity = document.createElement("INPUT");
 quantity.setAttribute("type", "number");
 quantity.setAttribute("value", "");
 quantity.setAttribute("id",`in${i}`);
//  let value=quantity.getAttribute("value");

//  document.write(value);
//  console.log(value);
 let checkbox = document.createElement("INPUT"); 
 checkbox.setAttribute("type", "checkbox");
 checkbox.setAttribute("id",`ch${i}`);

 selectElement.appendChild(checkbox);
 selectElement.appendChild(quantity);
  

  checkbox.name=Product.allProducts[i].name;
   pricearray[i]=Product.allProducts[i].price;
 
  // checkboxarray.push(checkbox);
  // quantityarray.push(quantity);
  //  console.log(quantity.value+"tr");
  // console.log(quantityarray[0]);

  }

}
let newPrice=[];
let checkboxarray=[];
let totalPrice =0;

// let quantityarray=[];

// let checkedbox=[];

let newquant=[];
let newPrice1=1;
function handleSubmit(event) {
  
  
  for(let i=0;i<7;i++){
       let check =document.getElementById(`ch${i}`).checked;
       let quantity=document.getElementById(`in${i}`).value;
       let name=document.getElementById(`ch${i}`).name;
       let price=Product.allProducts[i].price;

       console.log(name);
       console.log(quantity);
       if(check){

 newquant.push(quantity);
  newPrice.push(price);
  newPrice1=newquant[i]*newPrice[i];
totalPrice=totalPrice+newPrice1;
 cart.addItem(name,newquant[i],newPrice1);
       }
       
       window.location.href="checkout.html";

  }
  
  // TODO: Prevent the page from reloading
  event.preventDefault();
  
  // Do all the things ...
  // addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  //updateCartPreview();

}
// let newquantity=[];
// let newprice=[];
// let totalPrice=0;
// TODO: Add the selected item and quantity to the cart
// function addSelectedItemToCart() {
//   // TODO: suss out the item picked from the select list
 

//   for (let i = 0; i < checkboxarray.length; i++) {
//     // console.log(i+"first");
    
//     if (checkboxarray[i].checked) {
//       // console.log(i+"first");
//      newprice.push(pricearray[i]);

//         checkedbox.push(checkboxarray[i]);
//         newquantity.push(quantityarray[i]);

//         //  for (let j = 0; j < quantityarray.length; j++) {
//         //  quant=  quantityarray[j];
//         //  console.log(quant+"forresult")

//             // cart.addItem(checkboxarray[i].name,3)
//           // }
//                let pricetot=0;
//                console.log(newprice);
//           for (let x = 0; x < newprice.length; x++) {

//             cart.addItem(checkedbox[x].name, newquantity[x],newprice[x]);

//             pricetot=pricetot+parseInt(newprice[x]);
//             console.log(parseInt(pricetot));
        
//             checkedbox=[];
//             newquantity=[];
//             newprice=[];
//           }
        
//           // cart.addItem(checkboxarray[i].name,3,newprice[x]);
//         // console.log(quant+"result"); 
//         checkboxarray[i]=false;}
        
//     }
      
//   }
  
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

populateForm();
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
