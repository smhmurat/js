
//Klasik Fonksiyon Tanımlama
function helloWorld(firstName) {
    console.log(`Merhaba ${firstName}`);
}

helloWorld('Semih');

//Arrow Function ile Tanımlama
const helloWorldV1 = (firstName) => { console.log(`Arrow Function v1: ${firstName}`); }
helloWorldV1('Semih');
const helloWorldV2 = firstName => { console.log(`Arrow Function v2: ${firstName}`); }
helloWorldV2('Semih');
const helloWorldV3 = firstName => console.log(`Arrow Function v3: ${firstName}`);
helloWorldV3('Semih');
const helloWorldV4 = (firstName, lastName) => console.log(`Arrow Function v4: ${firstName} ${lastName}`);
helloWorldV4('Semih', 'Murat');
const helloWorldV5 = (firstName, lastName) => {
    let info = `${firstName} ${lastName}`;
    console.log('Arrow Function v5:',info);
    return info;
}
helloWorldV5('Semih','Murat');