//Вывести в консоль через цикл while значения от 0 до 50 включительно

let i = 0;
while (i <= 50){
    console.log(i);
    i++;
}

//Вывести в консоль только четные числа в диапазоне от 0 до 100, используя цикл for.

for (let y = 0; y <= 100; y++){
    if (y % 2 == 0){
        console.log(y);
    }
}

//Написать функцию, в которой необходимо сложить все числа массива из 20 элементов и вывести результат в alert

var arr = [];
for (let y = 0; y < 20; y++){
    arr[y] = y;
}

function summ(arr){
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    alert(temp);
}

summ(arr);

//Возвести 2 в 8 степень с помощью цикла while

let k = 0;
let temp = 1;
while(k < 8){
    temp *= 2;
    k++;
}
console.log(temp);

//Найти самую большую цифру в целом числе

var number = 1984;
function biggestDigit(number) {
    var digitsArray = String(number).split("");
    let biggest = Math.max.apply(null, digitsArray);
    console.log(biggest);
}

biggestDigit(1984);


//Функция по возведению числа в степень и выводом в консоль


function test(number, iter){
    let temp = 1;
    for (let i = 0; i < iter; i++){
        temp *= number;
    }

    console.log(temp);
}

test(3,3);