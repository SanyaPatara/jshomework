var $main = document.getElementById('main');


var $numbers = document.createElement('div');
$numbers.classList.add('numbers');
$main.appendChild($numbers);

var $emptyNum = document.createElement('div');
$numbers.appendChild($emptyNum);

var $right = document.createElement('div');
$right.classList.add('right');
$main.appendChild($right);

var $liters = document.createElement('div');
$liters.classList.add('liters');
$right.appendChild($liters);


var $squaretable = document.createElement('div');
$squaretable.classList.add('squaretable');
$right.appendChild($squaretable);

var $numb = ['8','7','6','5','4','3','2','1'];

for (var i = 0; i < 8; i++){
    var $litera = document.createElement('div');
    $litera.classList.add('litera');
    $litera.textContent = String.fromCharCode(65 + i);
    $liters.appendChild($litera);

    var $num = document.createElement('div');
    $num.classList.add('num');
    $num.textContent = $numb[i];
    $numbers.appendChild($num);

}



for(var i = 0; i < 64; i++){
    var $square = document.createElement('div');
    $square.classList.add('square');
    $squaretable.appendChild($square);
}

function squares64(){

}

