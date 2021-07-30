let greeting = document.querySelector('#click');
greeting.addEventListener('click', domClick);

function domClick() {
    console.log('Tıklama algılandı.');
    this.style.color == 'red' ? this.style.color = 'black' : this.style.color = 'red';
}

let greeting2 = document.querySelector('#mouseover');
greeting2.addEventListener('mouseover', domMouseover);

function domMouseover() {
    console.log('Mouse imleci algılandı.')
    this.style.color == 'red' ? this.style.color = 'black' : this.style.color = 'red';}