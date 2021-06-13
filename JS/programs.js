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
  
  // Product contructor.
  const Product = function (filePath,name,price) {
    this.filePath = filePath;
    this.name = name;
    this.price=price;

    Product.allProducts.push(this);
  };
  Product.allProducts = [];
  
  function generateCatalog() {
    new Product('assets/bag.jpg', 'Wadi Ibn Hammad–Karak','20');
    new Product('assets/banana.jpg', 'Dibeen Forest–Jerash','15');
    new Product('assets/bathroom.jpg', 'Inaba Forest–Irbid','17');
    new Product('assets/boots.jpg', 'Alarayes Lake+Wadi alshallala–Irbid','22');
    new Product('assets/breakfast.jpg', 'Azraq wetland Reserve-Al-Azraq','25');
    new Product('assets/bubblegum.jpg', 'Wadi Mkheris-Dead sea','65');
    new Product('assets/chair.jpg', 'Aqaba-Wadi Rum-Petra','40');
    
  }
  // Initialize the app by creating the big list of products with images and names
  generateCatalog();

  