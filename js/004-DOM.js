//Document Object Model (DOM)
console.log(document.URL);
console.log(document.domain);
console.log(document.location);
console.log(document.location.pathname);
console.log(document.location.hostname);

// getElementById
let newTitle = document.getElementById('title')
newTitle.innerHTML = 'JavaScript Dersleri';
newTitle.style.color = 'red';
newTitle.style.fontFamily = 'Helvetica';
console.log(newTitle);

// querySelector
document.querySelector('ul#list>li>a#link').innerHTML += " değişti.";
document.querySelector('#link').innerHTML = 'Link bilgisi yeniden değişti.';

// getElementsByTagName
console.log(document.getElementsByTagName('*'));