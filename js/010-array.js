//Liste oluşturma
let userName = 'semih'
let isActive = true
let items = [10, 20, 30, 40, 50, 60, 70, userName, isActive]

console.log(items)
console.log('Array.length: ', items.length)

// Listenin ilk elemanına ulaşmak
console.log(items[0])

//Listenin son elemanına ulaşmak
console.log(items[items.length-1])

// Listenin ortasındaki elemana ulaşmak
console.log(items[Math.floor(items.length/2)]);

//Liste içindeki bir elemanın bilgisini değiştirme
items[3] = 45
console.log(items)


//Listenin sonuna eleman eklemek => push
items.push(75)
console.log(items)

//Listenin başına eleman eklemek => unshift
items.unshift('ilk-eleman')
console.log(items)

//Listenin herhangi bir index değerine eleman eklemek
//splice ---> ilk değer index, ikinci değer silme, üçüncü değer eklenecek eleman
items.splice(4, 0, 456)
console.log(items)

//Listenin sonundan eleman silmek => pop
let lastItem = items.pop()
console.log(lastItem)
items.pop()
console.log("Son eleman silindikten sonra: ", items)

//Listenin başından eleman silmek => shift
let firstItem = items.shift()
console.log('firtsItem: ', firstItem, ', items: ', items)

//Listenin herhangi bir index değerinden eleman silmek
items.splice(3,3) //3. index değerinden itibaren 3 eleman sil
console.log(items)

items = [1, 2, 3, 4, 5]
console.log(items)

let maleUsers = ['Ayşe', 'Fatma', 'Hayriye']
let femaleUsers = ['Ali', 'Veli', 'Ahmet']

items.unshift(maleUsers)
items.push(femaleUsers)
console.log(items)
console.log(items[0].length)
console.log(items[0][1])
console.log(items[items.length-1][2])

// Array Kopyalamak
let copyItems = items
console.log(items)
copyItems.pop()
let copyItemsSlice = items.slice()
copyItemsSlice.pop()

let es6Items = [...items]
es6Items.pop()

console.log("copyItems: ", copyItems)
console.log("items", items)
console.log("copyItemsSlice", copyItemsSlice)
console.log("es6Items: ", es6Items)

//Birden fazla array birleştirme
let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)

//Array içindeki bilgiyi stringe çevirmek
console.log(allUsers.toString())
console.log(allUsers.join(' -*-*- '))

//İstediğimiz index bilgisine öğe ekleme -> splice(index, 0, value)
//Sondan bir öncesine ekle
//ikinci değer olan 0 silme demektir.
allUsers.splice(allUsers.length-1, 0, 'Mehmet')
console.log(allUsers)
//tam ortasına ekle
allUsers.splice(Math.floor(allUsers.length/2), 0, 'Sedanur')
allUsers.splice(Math.floor(allUsers.length/2), 0, 'Semih')
console.log(allUsers)

//Elemanın dizide olup olmadığını kontrol etme
console.log('Dizide \'Semih\' var mı? :', allUsers.includes('Semih'))
console.log('Dizide \'semih\' var mı? :', allUsers.includes('semih'))

//Dilimleme ile yeni dizi oluşturma -> slice(başlangıç(dahil), bitiş(dahil değil))
const newUsersList = allUsers.slice(1,5)
console.log(newUsersList)

//Dizileri birleştirme
console.log(femaleUsers.concat(maleUsers))

//foreach
const malzemeler = ['un', 'süt', 'yumurta', 'şeker']

malzemeler.forEach(function(malzeme, index) {
    console.log('Malzeme Adı:',malzeme, 'İndeksi:',index)
})

//map
//Diziyi yine bir dizi içerisinde tutar.
const sayilar = [1, 2, 3, 4, 5, 6]
let square = sayilar.map(function(sayi) {
    return sayi**2;
})

console.log('Verilen sayıların karesi:', square);

//some
const sonuc1 = sayilar.some(function(sayi){
    return sayi > 5;
})
console.log('5\'ten büyük sayı var mı?:',sonuc1)

const sonuc2 = sayilar.some(function(sayi){
    return sayi < 0;
})
console.log('0\'dan küçük sayı var mı?:',sonuc2)

//every -> dizideki tüm elemanlar koşula uymalı
const sonuc3 = sayilar.every(function(sayi) {
    return sayi > 4;
})
console.log('Dizideki tüm elemanlar 4\'ten büyük mü?:', sonuc3)

const sonuc4 = sayilar.every(function(sayi) {
    return sayi < 10;
})
console.log('Dizideki tüm elemanlar 10\'dan küçük mü?:', sonuc4)

//filter 
//Verilen koşula uyan elemanlarla yeni dizi oluştur.
const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi % 2 == 1;
});
console.log('Filtrelenmiş Sayılar Dizisi:', filtrelenmisSayilar)

//find
//Koşula uyan dizi elemanını bulur. Farkı elemanın kendisini döner. 
//Birden fazla eleman varsa ilk elemanı döner. Bulamazsa undefined döner.
const arananEleman = sayilar.find(function(sayi) {
    return sayi % 5 == 0;
})

console.log('Sayılar dizisinde 5 ve 5\'in katı olanlar:', arananEleman)

//sort 
//parametre olarak fonksiyon verilmezse dizi elemanlarını string olarak görür.
const sayilar2 = [1, 33, 23, 3, 45, 67, 78, 56, 33, 45, 90, 29, 12, 4, 6, 7, 9]
console.log(sayilar2)
sayilar2.sort()
console.log(sayilar2)

//Küçükten büyüğe
const sayilar3 = sayilar2.sort(function(a,b) {
    return a-b;
});

console.log(sayilar3);

//Büyükten küçüğe
const sayilar4 = sayilar2.sort(function(a,b) {
    return b-a;
});

console.log(sayilar4);