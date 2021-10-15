// Объявить две переменные с любыми значениями и затем поменять значения переменных местами. Вывести в консоль значения переменных до и после //
var first = 10,
    second = 'Animal',
    tmp;
console.log(`firstVariable: ${first}, secondVariable: ${second}`);
tmp = first;
first = second;
second = tmp;
console.log(`firstVariable: ${first}, secondVariable: ${second}`);

// Объявить массив состоящий из 10 любых чисел, сложить три любых числа из этого массива с помощью оператора + и вывести результат в консоль //
var numbers = [];
for (let i = 0; i < 10; i++){
    numbers.push(i);
}

console.log(numbers[3] + numbers[5] + numbers[9]);

// Создать функцию в теле которой необходимо положить код из первого и второго задания, объявить объект в этой функции, в который необходимо положить значения двух переменных из первого задания с соответствующими названиями полей как у этих переменных и положить результат сложения из второго задания в поле sum. Вывести этот объект в консоль. Запустить эту функцию //

function objectTest(){
    let first = 'firstVariable', second = 'secindVariable';

    var numbers = [];
    for (let i = 0; i < 10; i++){
        numbers.push(i);
    }
    let numbersRandomSum = numbers[3] + numbers[5] + numbers[9];
    
    var obj = {
        firstValue: first,
        secondValue: second,
        sum: numbersRandomSum
    }

    console.log(obj);
}

objectTest();

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