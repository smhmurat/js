var firsName = 'Semih';
var lastName = 'Murat';
var mail = 'smhmurat@gmail.com'

//String verilerde karakter sayısını öğrenmek
console.log('Karakter Sayısı:',mail.length);
console.log(`${mail} verisine ait karakter sayısı: ${mail.length}`); //Template Literals

//İlk Karakteri bulmak
console.log(`${firsName} verisinin ilk karakteri: ${firsName[0]}`);
console.log(`${lastName} verisinin ilk karakteri: ${lastName[0]}`);
console.log(`${lastName} verisinin ikinci karakteri: ${lastName[1]}`);
console.log(`${lastName} verisinin ilk karakteri: ${lastName.charAt(0)}`);
console.log(`${lastName} verisinin son karakteri: ${lastName[lastName.length-1]}`);

//Büyük Harf & Küçük Harf yapmak
lastName = lastName.toUpperCase();
console.log(lastName);

lastName = lastName.toLowerCase();
console.log(lastName);

//String içinde arama yapmak
console.log(mail.search("@"));
console.log(mail.search("asdfafa")); //Olmayan bir şeyi aratırsan sonuç -1 döner.

//Belli bir yere kadar almak (slice)
console.log(mail.slice(1,7));
console.log(mail.slice(mail.search('@')));
console.log(mail.slice(mail.indexOf('.')));
console.log(mail.slice(mail.search('@'), mail.indexOf('.')));

//Bilgiyi değiştirme
mail = mail.replace('gmail.com', 'hotmail.com');
console.log(mail);

//İsteğim bilgi var mı?
console.log(mail.includes('@'));
console.log(mail.includes('gmail'));
console.log(mail.includes('hot'));

// İstediğim şeyle başladı mı? bitti mi?
console.log(firsName.startsWith('se'));
console.log(firsName.startsWith('Se'));
console.log(lastName.endsWith('at'));

//İlk harflerini büyük yapmak
let fullName = `${firsName[0].toLocaleUpperCase()}${firsName.slice(1)} ${lastName[0].toLocaleUpperCase()}${lastName.slice(1)}`;
console.log(fullName);

//Birleştirme --> concat
var username = 'smhmurat';
var domain = 'gmail.com';
console.log(username.concat('','@').concat('',domain));

//Örnekler
let language = 'Java';
console.log(language);
console.log(language.replace('Java','JavaScript'));

let url = "www.kodluyoruz.org";
let url2 = url.slice(url.indexOf('.')+1);
console.log(url2);

let url3 = url.slice(url.lastIndexOf('w')+2);
console.log(url3);

var x = 10 / 'a';
console.log(Boolean(x));

var y = "" || -2 || 'JavaScript';
console.log(Boolean(y));