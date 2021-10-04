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