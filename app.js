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

function drawIceCreams() {
  let iceCream_Div = document.getElementById('ice-creams');
  let template = '';
  iceCreams.forEach((icecream) => {
    template += `
    <div class="card mx-1" style="width: 10rem;" ">
    <img onclick="addFlavorToCart('${icecream.name}')" src="${icecream.image}" class="card-img-top" alt="..." style="width:10rem; height:10rem" >
    <div class="card-body">
    <p class="card-text">Style:<br> ${icecream.name}</p>
    <p class="card-text"> Price :$${icecream.price}</p>
   
    </div>
    </div>`;
  });

  iceCream_Div.innerHTML = template;
}

function addFlavorToCart(name) {
  let flavor = iceCreams.find((flavor) => flavor.name == name);
  flavor.quantity++;
  console.log(flavor.name);
  drawCart();
}

function drawVessels() {
  let vessels_Div = document.getElementById('vessels');
  let template = '';
  vessels.forEach((vessel) => {
    template += `
    <div class="card mx-1" style="width: 9rem; ">
    <img onclick="addVesselToCart('${vessel.name}')" src="${vessel.image}" class="card-img-top" alt="..." style="width:100%; height:100%">
    <div class="card-body">
    <p class="card-text">Style: ${vessel.name}</p>
    <p class="card-text"> Price :${vessel.price}</p>
    </div>
    </div>
    `;
    vessels_Div.innerHTML = template;
  });
}
function addVesselToCart(name) {
  let vessel = vessels.find((vessel) => vessel.name == name);
  vessel.quantity++;
  console.log(vessel.name);
  drawCart();
}

function drawTopping() {
  let toppings_Div = document.getElementById('toppings');
  let template = '';
  toppings.forEach((topping) => {
    template += `
    
    
    <div class="card mx-1" style="width: 10rem; ">
    <img onclick="addToppingToCart('${topping.name}')" src="${topping.image}" class="card-img-top" alt="..." style="width:100%; height:100%">
    <div class="card-body">
    <p class="card-text ">Style: ${topping.name}</p>
    <p class="card-text "> Price :${topping.price}</p>
    </div>
    </div>
    
    
    `;
    toppings_Div.innerHTML = template;
  });
}

function addToppingToCart(name) {
  let topping = toppings.find((topping) => topping.name == name);
  topping.quantity++;
  console.log(topping.name);
  drawCart();
}

function drawCart() {
  let cart = document.getElementById('cart');
  let template = '';
  iceCreams.forEach((flavor) => {
    if (flavor.quantity > 0) {
      template += `<div class="d-flex justify-content-between bg-info rounded px-2 border-bottom border-1 border-dark">
      <i onclick="removeFlavor('${flavor.name}')" class="mdi mdi-trash-can fs-3"></i>
      <p class ="col-4 ">${flavor.name}</p>
      <p class ="col-4 text-center">x${flavor.quantity}</p>
      <p class ="col-4 text-end">$${flavor.price}</p>
    </div>`;
    }
  });
  vessels.forEach((vessel) => {
    if (vessel.quantity > 0) {
      template += `<div class="d-flex justify-content-between px-2 bg-warning rounded border-bottom border-1 border-dark">
      <i onclick="removeVessel('${vessel.name}')" class="mdi mdi-trash-can fs-3"></i>
      <p>${vessel.name}</p>
      <p>x${vessel.quantity}</p>
      <p>$${vessel.price}</p>
    </div>`;
    }
  });
  toppings.forEach((topping) => {
    if (topping.quantity > 0) {
      template += `<div class="d-flex justify-content-between px-2 bg-danger rounded border-bottom border-1 border-dark">
      <i onclick="removeTopping('${topping.name}')" class="mdi mdi-trash-can fs-3"></i>
      <p>${topping.name}</p>
      <p>x${topping.quantity}</p>
      <p>$${topping.price}</p>
    </div>`;
    }
  });

  cart.innerHTML = template;
  drawTotal()
}

function drawTotal() {
   let total = 0
   let total_Div = document.getElementById('total')
   iceCreams.forEach(flavor => {
    total += flavor.price * flavor.quantity
   })
   vessels.forEach(vessel =>{
    total += vessel.price *  vessel.quantity
   })
   toppings.forEach(topping => {
    total += topping.price * topping.quantity
   })
   total_Div.innerText = total.toFixed(2)
}



function removeVessel(name){

let vessel = vessels.find(vessel => vessel.name == name)


 vessel.quantity--

 drawCart()
}
function removeTopping(name){


let topping = toppings.find(topping => topping.name == name)

 topping.quantity--

 drawCart()
}
function removeFlavor(name){

  let flavor = iceCreams.find(flavor => flavor.name == name)


 flavor.quantity--

 drawCart()
}


// function removeItem(name){
// let flavor = iceCreams.find(flavor => flavor.name == name)

//  flavor.quantity--

//  drawCart()
// }
// function removeItem(name){

// let topping = toppings.find(topping => topping.name == name)
 
//  topping.quantity--
//  drawCart()
// }
// function addPrice(){
//   let flavorPrice=iceCreams.find(icecream => icecream.price.valueOf)
//   let vesselPrice= vessels.find(vessel => vessel.price.valueOf)
//   let toppingPrice = toppings.find(topping => topping.price.valueOf)

// }
// addPrice()

// onclick="('${addPrice()}')
drawTopping();
drawIceCreams();
drawVessels();
