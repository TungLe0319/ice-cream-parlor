const iceCreams = [
  {
    name: 'Cookie Dough',
    image:
      'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
  },
  {
    name: 'Vanilla',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
  },
  {
    name: 'Strawberry',
    image:
      'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
  },
];

const vessels = [
  {
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
  },
  {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
  },
];

const toppings = [
  {
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
  },
  {
    name: 'Choclate Chips',
    image:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
  },
];
const cart = {};
let priceTotal = 0;
let table = document.getElementById('table');
let iceCream_Div = document.getElementById('ice-creams');
let vessels_Div = document.getElementById('vessels');
let toppings_Div = document.getElementById('toppings');

function drawIceCreams() {
  let template = '';
  iceCreams.forEach((icecream) => {
    template += `
  <div class="card mx-1" style="width: 10rem;" ">
  <img src="${icecream.image}" class="card-img-top" alt="..." style="width:10rem; height:10rem">
  <div class="card-body">
    <p class="card-text">Style: ${icecream.name}</p>
    <p class="card-text"> Price :${icecream.price}</p>
  </div>
</div>`;
  });

  iceCream_Div.innerHTML = template;
}

function drawVessels() {
  let template = '';
  vessels.forEach((vessel) => {
    template += `
    
    
    <div class="card mx-1" style="width: 10rem; ">
    <img src="${vessel.image}" class="card-img-top" alt="..." style="width:100%; height:100%">
    <div class="card-body">
    <p class="card-text">Style: ${vessel.name}</p>
    <p class="card-text"> Price :${vessel.price}</p>
    </div>
    </div>
    
    
    
    
    
    
    `;
    vessels_Div.innerHTML = template;
  });
}

function drawTopping() {
  let template = '';
  toppings.forEach((topping) => {
    template += `
    
    
    <div class="card mx-1" style="width: 10rem; ">
    <img src="${topping.image}" class="card-img-top" alt="..." style="width:100%; height:100%">
    <div class="card-body">
    <p class="card-text ">Style: ${topping.name}</p>
    <p class="card-text "> Price :${topping.price}</p>
    </div>
    </div>
    
    
    
    
    
    
    `;
    toppings_Div.innerHTML = template;
  });
}

function drawCart(){}

function addIceCreamToCart(){
}


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
