let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    //Default işlemi engelledik.
    event.preventDefault()
    console.log('İşlem gerçekleşti.')
    let inputScoreDOM = document.querySelector('#score')
    console.log(inputScoreDOM.value);
    localStorage.setItem('score', inputScoreDOM.value);
}