# Dizilerde Kullanilan Metotlar

### splice

splice(index, [, deleteCount, elem1.....elemN])

Bu metot dizide yukaridaki gibi belirtilen index degerinden baslayarak deleteCount kadar elemani siler. Daha sonra elem1 ile elemN arasinda kac tane yeni eleman varsa onlari diziye ekler.

```js
let arr = ["Ben", "JavaScript", "çalışıyorum"];

arr.splice(1, 1); // index 1'den 1 elaman sil

alert(arr); // ["Ben", "çalışıyorum"]
```

```js
let arr = ["Ben", "şu", "an", "JavaScript", "çalışıyorum"];

// İlk 4 elamanı sil ve öncesine yeni eleman ekle.
arr.splice(0, 4, "Ders");

alert(arr); // [Ders çalışıyorum]
```

splice silinen elemanilari object olarak dondurur. Yani sildigi elemanlari bir degiskene atayabiliriz.

```js
let arr = ["Ben", "şu", "an", "JavaScript", "çalışıyorum"];

// ilk iki elemanı sil.
let removed = arr.splice(0, 2);

alert(removed); // "Ben", "şu" <-- silinen elemanlar
```

Hicbir sey silmeden ekleme yapmak icin deleteCount degerini 0 olarak verebiliriz.

Negatif indeksler de kullanilabilir.

```js
let arr = [1, 2, 5];

// indeks -1 ( sondan birinci )
// 0 eleman sil,
// 3 vs 4 ekle
arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5
```

### slice

splice metoduna gore daha basittir. slice(start, end) olarak kullanilir. (end dahil degil)

```js
let str = "test";
let arr = ["t", "e", "s", "t"];

alert(str.slice(1, 3)); // es
alert(arr.slice(1, 3)); // e,s

alert(str.slice(-2)); // st
alert(arr.slice(-2)); // s,t
```

### concat

arr.concat metodu dizi ile diğer dizileri veya elemanları birbirine eklemeye yarar.

```js
let arr = [1, 2];

// diziyi [3,4] ile birleştir
alert(arr.concat([3, 4])); // 1,2,3,4

// diziyi [3,4] ve [5,6] ile birleştir
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// diziyi [3,4] ile birleştir ve ardından 5, 6 ekle
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
```

## Dizide Arama

### indexOf - lastIndexOf - includes

arr.indexOf, arr.lastIndexOf ve arr.includes aynı yazıma sahiptirler, ve aslında hepsi aynı işi yapar. Sadece karakterler yerine elemanlar üzerinde çalışırlar.

- arr.indexOf(eleman, balangic) baslangic indeksinden itibaren eleman'ı arar ve bulursa bunun indeksini döner, bulamazsa -1 döner.
- arr.lastIndexOf(eleman, baslangic) – aynı, fakat bu sağdan sola doğru bakar.
- arr.includes(eleman, baslangic) – eleman baslangıc'tan başlayarak elemanları kontrol eder. Bulursa true döner.

```js
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true
```

### find - findIndex

Nesnelerden olusan dizide arama yapmak icin kullanilirlar.

```js
let result = arr.find(function (elaman, index, dizi) {
  //  eğer aranan eleman bulunursa true döndürmeli.
});
```

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John
```

arr.findIndex metodu da aynı find metodu gibi çalışır fakat elemanın kendi yerine index'ini döndürür.

### filter

find metodu sadece fonksiyonu true yapan elemana bakar.

Birden fazlası için ise arr.filter(fn) kullanılabilir.

Yazımı neredeyse find ile aynıdır, fakat tek bir eleman yerine kurala uyan elemanları dizi halinde döner.

```js
let results = arr.filter(function (eleman, index, dizi) {
  // eğer elemanlar filtreye uygunsa true döndürür.
});
```

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
```

### split and join

```js
let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ");

for (let name of arr) {
  alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}
```

join metodu split metodunun tam tersi olarak calisir.

```js
let arr = ["Bilbo", "Gandalf", "Nazgul"];

let str = arr.join(";"); // glue the array into a string using ;

alert(str); // Bilbo;Gandalf;Nazgul
```

Dizilerle ilgili olusturdugum js dosyasi 👉 [Diziler](js/010-array.js)
