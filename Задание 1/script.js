// Если добавляю еще одно условие в while(newNum = NaN), то ничего не рабоет
var newNum = +prompt('Input your number from 0 to 999');

while (newNum > 999, newNum < 0){
    var newNum = +prompt('Input another number');

}
var newNum1 = newNum.toString();


var number1 = {
    hundreds: newNum1.charAt(0),
    dozens: newNum1.charAt(1),
    units: newNum1.charAt(2)
};



alert('hundreds: ' + number1.hundreds + ' dozens: ' + number1.dozens + ' units: ' + number1.units);

