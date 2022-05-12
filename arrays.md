# Diziler (Arrays)

Objeler verilerin anahtarli bir sekilde tutulmasini saglar. Ancak bazi durumlarda sirali koleksiyonlara ihtiyac duyabiliriz. Listenin 1., 2. veya n. elemanina ulasmak isteyebiliriz. Bu durumda obje yerine dizi (array) kullanmak daha mantiklidir.

```javascript
let arr = new Array();
let arr = [];
```

```js
let meyveler = ["elma", "armut", "portakal"];
console.log(meyveler.length); //3
```

Dizi her turlu elemani tutabilir.

```js
let arr = [
  "elma",
  { isim: "Semih" },
  true,
  function () {
    alert("Merhaba");
  },
];
console.log(arr[2]); //true
```

Asagidaki kullanimda ise dizi icerisinde buldugu fonksiyonu calistirir.

```js
console.log(arr[3]());
```

Yukaridaki kod calistiginda ekranda mesaj goruntulenir.

## Dizilere Eleman Ekleme ve Silme Islemleri

Kuyruk (Queue) dizilerin en fazla kullanildigi yerdir. (FIFO) Bilgisayar biliminde sirali elemanlardan olusan koleksiyon iki islemi desteklemelidir. Bunlar;

- Sonuna eleman eklemek
- Basindan eleman cikarmak (Bu durumda 2. eleman ilk siraya gelmeli)

Diziler ayrica yigin(stack) islemlerini de desteklemelidir. (LIFO)

- Sona eleman eklemek
- Sondan eleman cikarmak

### pop

Dizinin son elemanini siler.

```js
let meyveler = ["Elma", "Portakal", "Armut"];

alert(meyveler.pop()); // Armutu sil ve bunu ekranda bildir.

alert(meyveler); // Elma, Portakal
```

### push

Dizinin sonuna eleman ekler.

```js
let meyveler = ["Elma", "Portakal"];

meyveler.push("Armut");

alert(meyveler); // Elma, Portakal, Armut
```

### shift

Dizinin ilk elemanini siler.

```js
let meyveler = ["Elma", "Portakal", "Armut"];

alert(meyveler.shift()); // Elmayı sil ve bunu ekranda bildir.

alert(meyveler); // Portakal, Armut
```

### unshift

Dizinin baslangicina eleman ekler.

```js
let meyveler = ["Portakal", "Armut"];

meyveler.unshift("Elma");

alert(meyveler); // Elma, Portakal, Armut
```

**push ve unshift metotlari ayni anda birden fazla eleman ekleyebilirler.**
