var prices = [
product1 = {
  price: 300,
  color: 'red',
  size: 'S'
},
product2 = {
    price: 500,
    color: 'blue',
    size: 'S'
},
product3 = {
    price: 450,
    color: 'yellow',
    size: 'M'
},
product4 = {
    price: 700,
    color: 'yellow',
    size: 'XS'
},
];

function countBasketPrice(){
    var summm = 0;

    for (i = 0; i < prices.length; i++){
        summm += prices[i['price']];
    }
    return summm;
}

var cart = {
    price: countBasketPrice()
};

console.log('Total price ' +  cart.price);