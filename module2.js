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
    let temp1 = 1;
    for (let i = 0; i < iter; i++){
        temp1 *= number;
    }

    console.log(temp1);
}

test(3,3);


//Создайте массив, длиной в 6 элементов, каждый из  которого больше предыдущего на 5, 
//после этого найдите среднее значение из этих чисел.

var arr = [];
let temp2 = 11;
let summa = 0;
for (let i = 0 ; i < 6; i++){
    arr[i] = temp2;
    temp2 += 5;
    summa += arr[i];
}

let average = summa / arr.length;
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

// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем “Mark”, и хотела бы поприветствовать его немного иначе.

function sayHello(name) {
    if (name === 'Mark') {
      console.log('Hi, ' + name);
    } else {
      console.log('Hello, ' + name);
    }
  }
  
  sayHello('Alex');
  sayHello('Mark');
  sayHello('Andry');
  
  
  // Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
  function min(a,b) {
    return a > b ? b : a;
  }
  
  min(3, 5);
  min(-6, -9);
  min(10, 4);
  
  // Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
  
  function test(x, n) {
    if (n <= 0) {
      return 'Введите натуральные значения степени n, т.е. целые от 1 и выше';
    }
    let temp = 1;
    for (let i = 0; i < n; i++){
        temp *= x;
    }
  
    return temp;
  }
  
  test(3, 3);
  test(3, 0);
  
  // Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.
  
  function isEven(number) {
    return number % 2 == 0 ? true : false;
  }
  
  isEven(4);
  isEven(1);
  isEven(27);
  
  // Cоздать функцию deleteChars(str), которая удаляет первый и последний символы строки, которая передается в параметр, и возвращает новую строку без этих символов
  
  function deleteChars(lineBefore) {
    let arr = lineBefore.split("");
    arr.pop();
    arr.shift();
    let lineAfter = arr.join("");
    return lineAfter;
  }
  
  console.log(deleteChars('something'));
  console.log(deleteChars('eva'));
  console.log(deleteChars('a'));
  
  // Напишите функцию convertFloor(floor), которая получает американский этаж (передается как целое число), и возвращает реальный
  
  function convertFloor(floor){
    switch(true){
      case (floor >= 0 && floor <= 12):
        console.log(floor + 1);   
        break;
      case floor == 13:
        console.log('We have no 13`s floor, mate!');   
      break;
      default:
        console.log(floor);
    }
  }
  
  convertFloor(-4);
  convertFloor(0);
  convertFloor(12);
  convertFloor(13);
  
  //Перепишите функцию
  //- заменив if else на конструкцию switch (convertType1)
  //- через Function Expression (convertType2)
  //- с помощью стрелочного синтаксиса (convertType3)
  
  function convertType1(value, toType){
    switch (toType){
      case 'boolean':
        return Boolean(value);
      case 'string':
        return String(value);
      case 'number':
        return Number(value);
    }
  }
  
  let convertType2 = function(value, toType) {
    if(toType === 'boolean'){
      return Boolean(value);
    }else if (toType === 'string') {
      return String(value);
    }else if (toType === 'number'){
      return Number(value);
    }
  }
  
  let convertType3 = (value, toType) => {
    if(toType === 'boolean'){
      return Boolean(value);
    }else if (toType === 'string') {
      return String(value);
    }else if (toType === 'number'){
      return Number(value);
    }
  }
  
  console.log(convertType1('my string', 'boolean'));
  console.log(convertType2('34', 'number'));
  console.log(convertType3(false, 'string'));
  
  /** Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:
  1) arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
  2) index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять между собой местами (fpos и clfw нужно поменять местами)
  3) adding - строка, которую необходимо дописать в конец к каждому элементу массива 
  и возвращающую массив с учетом указанных трансформаций.
  Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]
  */
  
  function transformArray(arr, index1, index2, adding) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  
    arr = arr.map(function (item) {
      return item + adding;
    });
    console.log(arr);
  }
  
  let array = ['fngp1', 'kgei2', 'fpos3', 'clfw4'];
  transformArray(array, 0, 3, 'adding');
  
  
  // Написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,  пока не останется одна цифра
  
  function lastNumber(number){
    let numberArray = splitToArray(number);
      number = numberArray.reduce((a, b) => a + b, 0);
  
    function splitToArray(number){
      return Array.from(String(number), Number);
    }
  
    return number > 9 ? lastNumber(number) : number;
  }
  
  console.log(lastNumber(2));
  console.log(lastNumber(17));
  console.log(lastNumber(942));
  console.log(lastNumber(132189));


/**
Необходимо в комментарияx написать перед каждой строчкой кода что будет лежать в lexical environment(как мы делали в классе)
*/

let num = 10;

const value = getValue();
//1) value = Nan, т.к. в getValue не было передано значения
function getValue(num) {
  // value не передает значения, значит num будет undefined
  // newValue передает 30, значит num = 30
    return 5 + num;
}

const newValue = getValue(30);
// newValue = 35


let text = 'some text';

let otherText = 'other text';

let swapText = (text) => {
    let temp = otherText;
    //1) локальная temp = 'other text'
    unSwapText();
    otherText = text;
    //3) локальная otherText = 'param text' (переданной в функцию)

    function unSwapText() {
        otherText = temp;
        //2) локальная otherText = 'other text'
    }
};
//4) глобальная otherText не изменилась
swapText('param text');

let a = 5;
let b = 10;

function sum(a, b) {
    return a + b;
}

const subtraction = (a, b) => {
    //2) a = 5
    a = a + 4;
    //3) локально a меняется на 9
    function doSubtraction(a) {
      //5) локальная a = 9, глобальная b = 10 = результат -1
        return a - b;
    }
    //4) локальная a = 9, глобальная b = 10
    return doSubtraction(a);
};

if (a > b) {
    sum(a, b);
} else {
  // 1) Сравниваются глобальные переменные a = 5 и b = 10
    subtraction(a, b);
}
console.log(a, b)
//Глобально a все еще равна 5, b равна 10


// /*Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px*/

let body = document.querySelector("body");

let textElement = document.createElement("p");
textElement.className = "text";
textElement.innerText = "Это всего лишь текст";
body.append(textElement);
let alertElement = document.createElement("div");
alertElement.className = "alert"
alertElement.innerText = "А это сообщение об ошибке";
alertElement.style.backgroundColor = "red";
alertElement.style.color = "white";
alertElement.style.padding = "20px"
textElement.after(alertElement);

/**Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
*Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым. */

let namesArray = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let olElement = document.createElement("ol");
olElement.className = "names";
body.append(olElement);
namesArray.forEach(function (name, index) {
  let liElement = document.createElement("li");
  if (index % 2 == 0){
    liElement.className = "odd";
    liElement.style.backgroundColor = "blue";
  }else{
    liElement.className = "even";
    liElement.style.backgroundColor = "green";
  }

  listItem = document.createElement("span");
  listItem.innerText = name;

  if ((/([A-Za-z]).*?\1/).test(name.toLowerCase())){
    listItem.style.color = "white";
  }

  liElement.append(listItem);
  olElement.append(liElement);
});

/**Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left)
Пример вызова функции:  showMessage(“Всем привет”, ‘yellow’, 100, 50);
Примечание: Задать для .message позиционирование fixed, для корректного расчета положения сообщения
* Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться. 
** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие же и top, и left). Если есть - занять позицию +25px left и top. Если и в этот раз у нас имеется сообщение в данной позиции - повторять процедуру, пока не найдем свободное место.
 */

function showMessage(message, color, top, left){
  let messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerText = message;
  messageElement.style.backgroundColor = color;
  messageElement.style.position = "fixed";
  messageElement.style.top = top.toString() + "px";
  messageElement.style.left = left.toString() + "px";
  let messages = document.querySelectorAll(".message");
  setCoordinates();

  if (messages.length < 3){
    body.append(messageElement);
  }else{
    body.removeChild(document.querySelector('.message'));
    body.append(messageElement);
  }

  function setCoordinates(){
    messages.forEach(function (element) {
      let elementTop = parseInt(element.style.top);
      let elementLeft = parseInt(element.style.left);
      let currentElementTop = parseInt(messageElement.style.top);
      let currentElementLeft =  parseInt(messageElement.style.left);

      if (elementTop === currentElementTop && elementLeft === currentElementLeft){
            messageElement.style.top = (elementTop + 25).toString() + "px";
            messageElement.style.left = (elementLeft + 25).toString() + "px";
          }
    });
  }
}

showMessage("some div text", "red", 170, 150);
showMessage("another div text", "white", 300, 450);
showMessage("third div text", "yellow", 300, 450);
showMessage("finalDivElement", "purple", 300, 450);


/**
 Динамическое создание списка
Запрашивайте число у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Каждый следующий элемент <li> списка должен должен иметь значение суммы всех предыдущих элементов + введенного значения
Процесс прерывается, когда пользователь нажимает Esc, вводит пустую строку или не числовое значение
Все элементы должны создаваться динамически.
 Например, пользователь ввел 3, затем 5, затем 9, затем 15, затем 1, а затем нажал esc (или ввели не число), тогда на странице должно быть:
<ul>
<li>3</li> 
<li>8</li> // 3 + 5  
<li>20</li> // 3 + 8 + 9  
<li>46</li> // 3 + 8 + 20 + 15  
<li>78</li> // 3 + 8 + 20 + 46 + 1
</ul>
 */

let ulElement = document.createElement("ul");
ulElement.className = "numbers";
body.append(ulElement);
let promptNumber = 0;
do {
    promptNumber = Number.parseInt(prompt('Введите число:', 0));
    let liElement = document.createElement("li");
    liElement.className = "numbers-item";
    let numbers = document.querySelectorAll(".numbers-item");
    numbers.forEach(number => {
      promptNumber += Number.parseInt(number.innerText);
    });

    liElement.innerText = promptNumber;
    if (!Number.isNaN(promptNumber)){
      ulElement.append(liElement);
    }

  } while (promptNumber);




  window.addEventListener("load", function(event) {
  console.log(event);
});

window.addEventListener('scroll', function(event) {
  console.log('scrollEvent')
});


//При помощи обработчика событий скрывать выпадающее меню при наведении на любой из элементов навигации (пункты меню).

let dropdownElemens = document.getElementsByClassName("listened-item");

let closeDropdown = function() {
  let menu = document.querySelector(".listened-menu");
  let toggler = document.querySelector(".listened-toggle");

  toggler.classList.remove('show');
  toggler.setAttribute("aria-expanded","false");
  menu.classList.remove('show');
};

for (let i = 0; i < dropdownElemens.length; i++) {
    dropdownElemens[i].addEventListener('mouseover', closeDropdown, false);
}

// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.

let toggle = document.querySelector('.dropdown-to-listen');
let buttonCreate = document.createElement("button");
buttonCreate.className = 'btn btn-primary';
buttonCreate.innerText = 'Добавить';
buttonCreate.style.marginLeft = '35px';

let buttonDelete = document.createElement("button");
buttonDelete.className = 'btn btn-danger';
buttonDelete.innerText = 'Удалить';


toggle.after(buttonCreate);
toggle.after(buttonDelete);


buttonCreate.onclick = function(event) {
  let textToAppend = document.createElement("p");
  textToAppend.className = 'created-by-click-element';
  textToAppend.innerText = 'some text';

  this.after(textToAppend);
}

buttonDelete.onclick = function(event) {
  let elements = document.getElementsByClassName("created-by-click-element");
  if (elements.length){
    body.removeChild(elements[elements.length-1]);
  }
}


/**
Создание геометрических фигур
Реализовать функцию drawFigure, которая принимает в качестве аргументов: название геометрической фигуры, цвет заливки, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W и тд
 */

window.addEventListener("keydown", function (event) {

  let width =  document.getElementById('figure-width').value;
  let height =  document.getElementById('figure-height').value;
  let color =  document.getElementById('figure-color').value;
  let top =  document.getElementById('figure-top').value;
  let left =  document.getElementById('figure-left').value;
  
  switch (color){
    case '1':
      color = 'red';
      break;
    case '2':
      color = 'blue';
      break;
    case '3':
      color = 'green';
      break;
    case '4':
      color = 'yellow';
      break;
    case '5':
      color = 'pink';
      break;
    default:
      color = 'black';          
  }

  if (top === ''){
    top = 150;
  }

  if (left === ''){
    left = 150;
  }

  if (event.key === 'q' || event.key === 'й') {
    if (width === ''){
      this.alert('Заполните первое поле');
    }
    drawFigure('circle', color, width, null,  top, left);
  }else if(event.key === 'w' || event.key === 'ц'){
    if (width === ''){
      this.alert('Заполните первое поле');
    }
    drawFigure('square', color, width, null, top, left);
  }else if(event.key === 'e' || event.key === 'у'){
    if (width === '' || height === ''){
      this.alert('Введите оба значения');
    }
    drawFigure('rectangle', color, width, height, top, left);
  }
});


let drawFigure = function(figureType, color,  width, height, top, left) {
    let previousFigure = document.querySelector('.figure');
    if (previousFigure){
      body.removeChild(previousFigure);
    }
    let figure = document.createElement('div');
    figure.className = 'figure';
    figure.style.position = 'fixed';
    figure.style.backgroundColor = color;
    figure.style.top = top + 'px';
    figure.style.left = left + 'px';

    if (figureType === 'circle'){
      figure.style.height = (width * 2) + 'px';
      figure.style.width = (width * 2) + 'px';
      figure.style.borderRadius = "50%";
    }else if (figureType === 'square'){
      figure.style.height = width + 'px';
      figure.style.width = width + 'px';
    }else{
      figure.style.height = height + 'px';
      figure.style.width = width + 'px';
    }
    body.append(figure);
  };