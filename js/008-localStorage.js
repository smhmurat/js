let user = {userName: 'Semih Murat', isActive: true};
console.log(user);
localStorage.setItem('userInfo', JSON.stringify(user));
console.log(user);

let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo);
console.log(userInfo.userName);