var username = 'smhmurat';
var domain = 'gmail.com';

let email = username + '@' + domain;
var date = new Date();

//Template Literals Kullanmadan İfade Birleştirme
console.log('Kayıt oluşturuldu...','Kullanıcı Adı:',username, 'Email Adresi:',email);

//Template Literals Kullanılarak Birden Çok Satırda İfade Birleştirme
let info = `Kayıt oluşturuldu...
Kullanıcı Adı:${username}
Email Adresi:${email}
Kayıt Tarihi:${date.getDay()}/${date.getMonth()}/${date.getFullYear()}
Gösterim Saati: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
`
console.log(info);