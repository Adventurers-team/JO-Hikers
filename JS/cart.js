/* global Cart */
'use strict';



// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {

  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)   reminderr
function clearCart() {

  let parent = document.getElementsByTagName('tbody')[0];
  parent.textContent = '';
}

//  console.log("test");

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {

  // TODO: Find the table body
  let parent = document.getElementsByTagName('tbody')[0];

  // TODO: Iterate over the items in the cart

  // // TODO: Create a TR

  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR


  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    parent.appendChild(tr);


    let deleteTd = document.createElement('td');
    deleteTd.setAttribute("id",`del${i}`)
    deleteTd.textContent = 'X';
    tr.appendChild(deleteTd);
     deleteTd.setAttribute("title",cart.items[i].price)

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    tr.appendChild(quantityTd);

    let productTd = document.createElement('td');
    productTd.textContent = cart.items[i].product;
    tr.appendChild(productTd);

    let priceTd = document.createElement('td');
    priceTd.textContent = cart.items[i].price;
    tr.appendChild(priceTd);

  }
}
//onsole.log(totalPrice);
let total = document.getElementById('total');
console.log(total + 'Hiiiiiiiii');


function removeItemFromCart(event) {
  console.log("alert");
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  if (event.target.textContent === 'X') {

    cart.removeItem(event.target.id);
    console.log(event.target.title);

    let totalPrice=Number(localStorage.getItem('total'))-Number(event.target.title);
    localStorage.setItem('total',totalPrice);
    total.textContent=totalPrice;
    console.log(total);

  }
  //******* */ TODO: Save the cart back to local storage

//   let storageTotal = document.getElementById('total');
//   let totalData = JSON.parse(localStorage.getItem('total'));
//   let newTotal=[Number(totalData)]-[Number(event.target.price)];
// console.log([Number(event.target.id.price)]+"try");
//   console.log(newTotal);
//   storageTotal.textContent = newTotal;




  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
