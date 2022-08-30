const iceCreams = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]
let priceTotal = 0
let table = document.getElementById("table")


function draw(){
  let iceCream_Div=document.getElementById("ice-creams")
let template = ''
iceCreams.forEach(icecream =>{
  template+= `
  <div>

  <div class="card mx-3" style="width: 10rem;">
  <img src="${icecream.image}" class="card-img-top" alt="..." style="width:10rem; height:10rem">
  <div class="card-body">
    <p class="card-text">Style: ${icecream.name}</p>
    <p class="card-text"> Price :${icecream.price}</p>
  </div>
</div>

  
  </div>
  
  `
})
iceCream_Div.innerHTML = template
}
draw()