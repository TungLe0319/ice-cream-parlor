const iceCreams = [
  {
    name: 'Cookie Dough',
    image:
      'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0,
  },
  {
    name: 'Vanilla',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0,
  },
  {
    name: 'Strawberry',
    image:
      'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0,
  },
];

const vessels = [
  {
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0,
  },
  {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0,
  },
];

const toppings = [
  {
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0,
  },
  {
    name: 'Choclate Chips',
    image:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0,
  },
];

// LOGIC  IS THERES DISPLAYED ITEMS IN A STORE
// WHEN THEY SELECT/CLICK A AN ITEM ADD IT TO A CART AND ADD THE TOTAL PRICE /QUANTITY OF EVERYTHING IN THE CART.




// PARAMETER IS THE name we put in the onclickfunction
// THIS IS A BUTTON CLICK EVENT.
// INCREASES QUANTITY OF FLAVORS IN THE ARRAY
function addFlavorsToCart(name) {
  let iceCream = iceCreams.find((flavor) => flavor.name == name);
  iceCream.quantity++;

  // THIS MAKES SURE  THE HTML BUTTON AND JAVASCRIPT IS CONNECTING PROPERLY
  console.log('quantity', iceCream.quantity);
  // if this function is true then drawCart() will work.
  drawCart()
}

// grabs the information to paste into HTML through the addFlavorsToCart(name)Function
// accessing the array of ice-creams and checking if the quantity is ABOVE 0 if so display it.
function drawCart() {
  let cart_DivInTheHTML = document.getElementById('cart');
  // when making a template you always want the template to begin as an empty string ''
  // `` backticks always used for templates
  let template = '';

  iceCreams.forEach((iceCream) => {
    if (iceCream.quantity > 0) {
      template += `
    <div class="d-flex border border-4 bg-dark text-light p-3">
    <p class="col-md-3   fs-5">${iceCream.name}</p>
    <p class="col-md-4 fs-5 text-center text-danger">x${iceCream.quantity}</p>
    <p class="col-md-4 fs-5 text-end text-success">$${iceCream.price}</p>
    </div>`;
    }
  });


// the empty spot ID we found we are now making it equal to the new template we made.
// .innerHTML adds HTML ELEMENTS LIKE DIVS AND CONTAINS AND SHIT LIKE THAT
// .innerText just TEXT
cart_DivInTheHTML.innerHTML=template
drawTotal()
}

// 
function drawTotal() {
let total_Div= document.getElementById('total')  
 let total = 0
iceCreams.forEach(flavor =>{
 total += flavor.quantity * flavor.price
})
console.log(total)

total_Div.innerText=total.toFixed(2)
}


function checkOut() {
iceCreams.forEach(iceCream =>{
  iceCream.quantity = 0
})

drawCart()

}
