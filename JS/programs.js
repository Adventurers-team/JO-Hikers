'use strict'

const Cart = function (items) {
    this.items = items;
  
  };

  Cart.prototype.addItem = function (product, quantity,price) {

     let newItem  = new CartItem(product,quantity,price);
     this.items.push(newItem);
     console.log("tryit");
     
  };
  
  
  Cart.prototype.saveToLocalStorage = function () {
    // TODO: Fill in this instance method to save the contents of the cart to localStorage
    localStorage.setItem('cart',JSON.stringify(this.items))
  };
  
  Cart.prototype.removeItem = function (item) {
    // TODO: Fill in this instance method to remove one item from the cart.
    // // Note: You will have to decide what kind of parameter to pass in here!
    this.items.splice(item, 1);
    //  localStorage.removeItem(item);
  };
  
  const CartItem = function (product, quantity, price) {
    this.product = product;
    this.quantity = quantity;
        this.price=price;

  };
  // let picc= [];

  // Product contructor.
  const Product = function (filePath,name,price,paragraph) {
    this.filePath = filePath; //array
    this.name = name;
    this.price=price;
    this.paragraph=paragraph;
    Product.allProducts.push(this);
  };
  Product.allProducts = [];

// let Picarry=[["img/alazraq2.jpg","img/alazraq3.jpg"],["img/dibeen1.jpg","img/dibeen2.jpg"]],;

  
  function generateCatalog() {
    new Product('img/ibnhammad1.jpg', 'Wadi Ibn Hammad–Karak 18km','20','If you are a beginner and want to join us for a short trip this program will fit you. We will start from 7:00 am and arrive to al-Karak at 10:00. Then we will join a group of hikers to hike in Wadi Ibn Hammad torrent, and then return back to Amman at 11:00 pm.');
    new Product('img/dibeen1.jpg', 'Dibeen Forest–Jerash','15','Here you can see The beautiful Nature of our  Jordan on( three days camping Program) that starts on 25-July – 2021. we will visit  the forest for hiking & camping in the forest. In the next day we will Visit Dibeen Forest reserve and Camping inside it. In the last day we will Take a tour in Jerash & return back to amman.');
    new Product('img/inaba.jpg', 'Inaba Forest–Irbid','17','Here you can see The beautiful Nature of our  Jordan on( three days camping Program) that starts on 30-July – 2021. on the first day Visit Inaba forest and hike there for 20 km, Camp in the forest for two days and Take a tour in Irbid then return back to Amman.');
    new Product('img/alarayslake1.jpg', 'Alarayes Lake+Wadi alshallala–Irbid','22', 'Here you can see The beautiful Nature of Jordan on( three days camping Program) that starts on 15-July – 2021. On the first day Visit the lake & hike for 18 km, Camp near the lake for two days and Take a tour in Irbid, visit Wadi AlShallala then return back to Amman.');
    new Product('img/alazraq1.jpg', 'Azraq wetland Reserve-Al-Azraq','25', 'it is a 1 day program, we will  Travel by bus to Al-Azraq on 12/7/2021 to visit Azraq wetland Reserve and hike there and return back to Amman at11:00');
    new Product('img/mkheris.jpeg', 'Wadi Mkheris-Dead sea','65', 'On 18- July – 2021 we will  Arrive at Wadi mkheris and Camp there, on day two we will Visit Dead sea Camping there. Arrive at Main Hot Springs and Return back to Amman.');
    new Product('img/wadirum.jpg', 'Aqaba-Wadi Rum-Petra','40','On the first day we arrived at Wadi Rum and Camp in the middle of the desert, on the next day we will visit Petra and  Camp there, on the last day we will arrive to Aqaba and then Return back to Amman.');
    
  }

  // render function
  // for loop through the filePath =>>>
  // 1. create image element 
  //2. source= this.filePath[i]

  // Initialize the app by creating the big list of products with images and names
  generateCatalog();

  
  let storageTotal = document.getElementById('total');
  let totalData = JSON.parse(localStorage.getItem('total'));
  console.log(totalData);
  storageTotal.textContent = totalData;