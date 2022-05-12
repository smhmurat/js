# Dizilerde Dongu Kullanimi

En eski yontem for dongusu kullanmaktir.

```js
let arr = ["elma", "armut", "portakal"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Dizilerde for...of dongusu de kullanilir.

```js
let arr = ["elma", "armut", "portakal"];
for (let i of arr) {
  console.log(i);
}
```

for...of dongusu elemanin sadece degerini dondurur. Kacinci sirada oldugunu dondurmez. Ancak cogu durumda yeterli ve kisa kullanimdir.

Teknik olarak diziler birer object oldugu icin for...in dongusu de kullanilir.

```js
let arr = ["elma", "armut", "portakal"];
for (let i in arr) {
  console.log(arr[i]);
}
```

for...in yapisi dizi icerisinde bulunan butun veri yapilarini listeledigi icin genel olarak dizilerde kullanilmasi performans sorunlarina neden olabilir. for...in dongusu object veri yapilarinda daha fazla tercih edilmelidir.

# Cok Boyutlu Diziler

```js
let matris = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matris[1][1]); //5
```
