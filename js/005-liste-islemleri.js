//Listenin ilk elemanını değiştirme
let firstChild = document.querySelector('ul#newList>li:first-child');
firstChild.innerHTML = "Listenin ilk elemanı js ile değiştirildi.";

//Listenin son elemanını değiştirme
let lastChild = document.querySelector('ul#newList>li:last-child');
console.log(lastChild);
lastChild.innerHTML = 'Listenin son elemanı js ile değiştirildi.';

//Listeye yeni öğe ekleme
let ulDOM = document.querySelector('ul#newList');
let liDOM = document.createElement('li');
liDOM.innerHTML = 'Listeye js ile yeni öğe eklendi.';
//Append metodu listenin sonuna ekler.
ulDOM.append(liDOM);
//Prepend metodu listenin başına ekler.
liDOM.innerHTML = 'Prepend metodu ile listenin başına öğe eklendi.';
ulDOM.prepend(liDOM);

// getElementsByClassName ile liste öğelerine erişmek
var item = document.getElementsByClassName('alternate');
for(var i=0; i<item.length; i++) {
    item[i].style.color = 'red';
}

// text ve buton kullanarak listeye veri ekleme
var inputText = document.querySelector('#veri');
var addButton = document.querySelector('#ekle');
var liste = document.querySelector('ul#liste');

addButton.addEventListener('click', function(){
    var li = document.createElement('li');
    li.textContent = inputText.value;
    liste.append(li);
    inputText.value = "";
}); 