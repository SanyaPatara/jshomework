var product1 = {
  price: 300,
  color: 'red',
  size: 'S'
};
var product2 = {
    price: 500,
    color: 'blue',
    size: 'S'
    
};
var product3 = {
    price: 450,
    color: 'yellow',
    size: 'M'
};
var product4 = {
    price: 700,
    color: 'yellow',
    size: 'XS'
};

var prices = [product1.price, product2.price, product3.price, product4.price];

function countBasketPrice(){
    var summm = 0;

    for (i = 0; i < prices.length; i++){
        summm += prices[i].price;
    }
    return summm;
}

var cart = {
    price: countBasketPrice()
};

console.log('Total price ' +  cart.price);