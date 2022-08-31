let sandwiches = [
  {
    name: 'Italian Sub',
    price: 10,
    quantity: 0,
  },
  {
    name: 'BanhMi',
    price: 15,
    quantity: 0,
  },
  {
    name: 'Panini with herbs',
    price: 35,
    quantity: 0,
  },
  {
    name: 'Meatball Sub',
    price: 20,
    quantity: 0,
  },
];

function addItalianSubToCart() {
  console.log(sandwiches[0].name);

  let sandwich = sandwiches[0];
  sandwich.quantity++;

  drawCart();
}

function addPaniniToCart() {
  let panini = sandwiches.find(
    (sandwich) => sandwich.name == 'Panini with herbs'
  );
  panini.quantity++;
  drawCart();
}

function addSandwichToCart(name) {
  let sandwich = sandwiches.find((sandwich) => sandwich.name == name);

  sandwich.quantity++;
  console.log(sandwich.name);
  drawCart();
}

// When do i want the cart to update? every time i click a sandwich i want it reflected in the cart
// INVOKE THIS when we add the talian sub
function drawCart() {
  let cart = document.getElementById('cart');
  let template = '';
  sandwiches.forEach((sandwich) => {
    if (sandwich.quantity > 0) {
      template += ` <div class="d-flex justify-content-between px-2 border-bottom border-1 border-dark">
      <i class="mdi mdi-trash-can text-danger fs-4" onclick="removeItem('${sandwich.name}','${sandwich.price}')"></i>
  <p>${sandwich.name}</p>
  <p>x${sandwich.quantity}</p>
  <p>$${sandwich.price}</p>
</div> `;
    }
  });
  cart.innerHTML = template;
  drawTotal();
}

// LOGIC go through sandos, if i have one add up the prices of all of them
function drawTotal() {
  let total = 0;
  // let total_div = document.getElementById("total")

  sandwiches.forEach((sandwich) => {
    total += sandwich.price * sandwich.quantity;
  });
  console.log('cart total:', total);
  // HERE tofixed sets the total to a fixed decimal point of 2
  document.getElementById('sub-total').innerText = total.toFixed(2)
  document.getElementById("actual-total").innerText = (total*1.06).toFixed(2)
}

// here we need to reset the quantity back to 0 to allow our data to reflect the change we made to the DOM
// relfecting bac kto drawcart()
function checkOut() {
  if (window.confirm('Are you ready to check?')) {
    sandwiches.forEach((sandwich) => {
      sandwich.quantity = 0;
    });
    drawCart();
  }
}

// here the parameter is "name" is PASSING THE INFORMATION WE PUT IN THE TEMPLATE TRASH CAN BUTTON
// ${sandwich.name} when setting up a parameter make sure you pass in an arugment.
// HERE PARAMETER ORDER MATTERS ON TRASH CLICK ITS name,price as parameters
function removeItem(name) {
  let sandwich = sandwiches.find((sandwich) => sandwich.name == name);
  console.log('sandwich', name);
  sandwich.quantity--;
  drawCart();
}
