console.log('Hello World');

var name = 'Semih'; //string
var age = 33; //number
var isWorking = true; //boolean
console.log(name);
console.log(typeof name);
console.log(age);
console.log(typeof age);
console.log(isWorking);
console.log(typeof isWorking);

var foo1 = 4;
console.log(typeof foo1);

var foo2;
console.log(typeof foo2);

var foo3 = null;
console.log(typeof foo3);

//NaN
var a = 5;
var b = {};
console.log(a+parseInt(b)); //Çıktı NaN
var num1 = Number('Hello World'); //NaN 

//Conversion
var num1 = parseInt("10", 2); //"10" değerinin ikili (binary) olarak dönüştür. (Çıktı: 2)
var num2 = parseInt("10", 8); //"10" değerinin sekizli (octal) olarak dönüştür. (Çıktı: 8)
var num3 = parseInt("10", 10); //"10" değerinin onlu (decimal) olarak dönüştür. (Çıktı: 10)
var num4 = parseInt("10", 16); //"10" değerinin onaltılı (hexadecimal) olarak dönüştür. (Çıktı: 16)
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//Strings
var lang = 'Java';
lang = lang + 'Script';
alert(lang);
