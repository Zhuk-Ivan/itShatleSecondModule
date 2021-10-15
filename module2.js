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


//Создайте массив, длиной в 6 элементов, каждый из  которого больше предыдущего на 5, 
//после этого найдите среднее значение из этих чисел.

var arr = [];
let temp = 11;
let summ = 0;
for (let i = 0 ; i < 6; i++){
    arr[i] = temp;
    temp += 5;
    summ += arr[i];
}

let average = summ / arr.length;
console.log(average);

//Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?

let arr2 = [1, 65,98,4,2,84,63,142];
let length = arr2.length;
console.log(arr2.pop()); // с удалением
arr2.splice(length, 0, 142);
console.log(arr2[length-1]); //без удаления элемента из массива

//Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.

arr2[length-2] = 'предпоследний элемент';
console.log(arr2);

//Задача из 5 шагов-строк:Создайте массив styles с элементами «Джаз», «Блюз».Добавьте в конец значение «Рок-н-Ролл» Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины. Удалите первое значение массива и выведите его alert. Добавьте в начало значения «Рэп» и «Регги».

var styles = ['Джаз', 'Блюз'];
styles.splice(3,0,'Рок-н-Ролл');
styles.splice(styles.length-2, 1, 'Классика');
alert(styles.shift());
styles.splice(0,0,'Рэп', 'Рэгги');
console.log(styles);

//Существует массив из какого-то количества элементов строковых данных. Необходимо создать новый массив из длин каждого из элементов исходного массива.

var months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь", "Ноябрь","Декабрь"];
var monthsLength = months.map(month => {
    return month.length;
});

console.log(monthsLength);

//Существует цикл for,  который перебирает массив со строковыми и числовыми  данными[“Anna”, 12, “Sam”, 9,  “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:


var arr3 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];

arr3.forEach(item => {
    if (typeof item === 'string'){
        console.log(item + ' - string value');
    }else{
        console.log(item + ' - number value');
    }
});

//Существует массив  [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] . Необходимо создать новый массив из значений данного, которые больше 10.

var arr4 = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];

var filteredArr = arr4.filter(item => {
    return item > 10;
});
console.log(filteredArr);

//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.Заканчивает ввод, как только посетитель введёт 15.При этом ноль 0 не должен заканчивать ввод, это разрешённое число.Выводит сумму всех значений массива

function giveMeNumber(){
    let tempo = 15;
    var arr5 = [];
    let age = 0;
    let iter = 0;
    let summ = 0;
    do {
        age = Number.parseInt(prompt('Введите число:', 0));
        arr5[iter] = age;
        iter++;
        summ += age;
      } while (age !== tempo);
    
      console.log(summ);
}

giveMeNumber();