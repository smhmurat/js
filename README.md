# JavaScript Tutorials
Bu repo JavaScript öğrenme sürecinde kaynak olması amacıyla oluşturulmuştur. Öğrenme sürecinde edinilen bilgiler ve kaynak kodlar düzenli olarak eklenecektir.

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

## Document Object Model (DOM)
> W3C(World Wide Web Consortium)'e göre Document Object Model, programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik olarak erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür. (patika.dev)

>> DOM’da HTML ile hazırladığınız sayfa, document; bu document'in içine yerleştirdiğiniz her türlü öğe ise element olarak adlandırılır. DOM'da nesnelerin birer element olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir. HTML içerisindeki her bir elemanın birbiri ile hiyerarşik bir yapı oluşturması ile oluşur. DOM bir ağaç dizini gibi bütün dokümanları birbirine bağlar.

### DOM İçerisinden Etiket ve ID ile Öğe Seçimi
```
// getElementById
let newTitle = document.getElementById('title')
newTitle.innerHTML = 'JavaScript Dersleri';
console.log(newTitle);

// querySelector
document.querySelector('ul#list>li>a#link').innerHTML += " değişti."
```

## Arrow Function Kullanımı
Fonksiyon tanımlama için JavaScript'te kullanılan klasik tanımlamanın yanı sıra ES6 ile birlikte Arrow Function yöntemi de kullanılmaktadır. Klasik tanımlamada 'function' anahtar kelimesinden sonra fonskiyon adı, parametre bildirimi yapılır.
```
//Klasik Fonksiyon Tanımlama
function helloWorld(firstName) {
    console.log(`Merhaba ${firstName}`);
}

helloWorld('Semih');
```
```
//Arrow Function ile Tanımlama
const helloWorldV1 = (firstName) => { console.log(`Arrow Function v1: ${firstName}`); }
helloWorldV1('Semih');
```
Eğer fonksiyon tek parametre alacaksa parametre parantez içerisine () alınmadan da tanımlama yapılabilir. 
```
const helloWorldV2 = firstName => { console.log(`Arrow Function v2: ${firstName}`); }
helloWorldV2('Semih');
```
Eğer fonksiyonun görevi tek bir kod satırından oluşuyorsa fonksiyon {} kullanılmadan da oluşturulabilir.
```
const helloWorldV3 = firstName => console.log(`Arrow Function v3: ${firstName}`);
helloWorldV3('Semih');
```
Ancak birden fazla parametre ya da birden fazla kod satırı kullanıldığında () ve {} kullanımına dikkat edilmelidir. return ile fonksiyon dışarıya değer döndürebilir. 
```
const helloWorldV5 = (firstName, lastName) => {
    let info = `${firstName} ${lastName}`;
    console.log('Arrow Function v5:',info);
    return info;
}
helloWorldV5('Semih','Murat');
```
