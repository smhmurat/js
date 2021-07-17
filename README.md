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

```
var foo1 = 4;
console.log(typeof foo1);//number

var foo2;
console.log(typeof foo2); //undefined
```

Diğer özel veri tipi olan null veri tipinde ise değişken tanımlanmış ancak içi boşaltılarak 'null' olarak bırakılmış kabul edilir. Hafızada boş bir obje olarak saklanır.

```
var foo3 = null;
console.log(typeof foo3);` //object
```

### NaN (Not A Number)
```
var a = 5;
var b = {};
console.log(a+parseInt(b)); //Çıktı NaN
```

## Dönüşümler
Veri tipleri arasında dönüşüm yapmak için parse anahtar kelimesi kullanılmaktadır. Herhangi bir veri tipi parseInt anahtar kelimesi ile int veri tipine dönüştürülebilir.

```
var num1 = parseInt("10", 2); //"10" değerinin ikili (binary) olarak dönüştür. (Çıktı: 2)
var num2 = parseInt("10", 8); //"10" değerinin sekizli (octal) olarak dönüştür. (Çıktı: 8)
var num3 = parseInt("10", 10); //"10" değerinin onlu (decimal) olarak dönüştür. (Çıktı: 10)
var num4 = parseInt("10", 16); //"10" değerinin onaltılı (hexadecimal) olarak dönüştür. (Çıktı: 16)
```

## Strings
```
var lang = 'Java';
lang = lang + 'Script';
alert(lang); //Çıktı: JavaScript
```

## Template Literals
Template Literals kod okunabilirliğini artıran ve yazım kolaylığı sağlayan bir string yazma şeklidir.  String ifadelerin birleştirilmesi esnasında gömülü ifadelere (interpolasyon) izin verilmesini ve birden çok satırın kullanılmasını sağlayan yapılardır. Normal string birleştirmeden farklı olarak tek tırnak(') ya da çift tırnak (") yerine bactrick (`) içerisine yazılır.
Template Literals kullanımında ifadeler birleştirilirken +, '', "" kullanımına gerek yoktur. Örneğin tarih bilgisini alırken yıl ifadesinden hemen sonra doğrudan / kullanabiliriz. 

Kod örnekleri js/002-template-literals.js isimli dosyadadır.

