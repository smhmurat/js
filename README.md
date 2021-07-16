# Data Types
JavaScript'te 5 adet ilkel tip vardır: Undefined, Null, Boolean, Number ve String.
```
var name = 'Semih'; //string
var age = 33; //number
var isWorking = true; //boolean
console.log(name);
console.log(typeof name);
console.log(age);
console.log(typeof age);
console.log(isWorking);
console.log(typeof isWorking);
```

Undefined tipi sadece undefined adında değere sahip olabilir. var anahtar kelimesi kullanılarak bir değişken tanımlandıysa ancak initialize edilmediyse undefined tipinde kalır.

`var foo1 = 4;`
`console.log(typeof foo1);`//number

`var foo2;`
`console.log(typeof foo2);` //undefined

Diğer özel veri tipi olan null veri tipinde ise değişken tanımlanmış ancak içi boşaltılarak 'null' olarak bırakılmış kabul edilir. Hafızada boş bir obje olarak saklanır.

`var foo3 = null;`
`console.log(typeof foo3);` //object

### NaN (Not A Number)

