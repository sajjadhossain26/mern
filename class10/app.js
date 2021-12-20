let username = "sajjadhossain262";
let pattern = /^[a-z]*[0-9]{2,8}$/;
console.log(pattern.test(username));

let number = "+8801865243109";
let pattern1 = /^(880|\+880)[0-9]{10}$/;
console.log(pattern1.test(number));

let email = "sajjadhossainctg26@gmail.online";
let pattern2 = /^[a-z]*[0-9]*@[a-z]{2,7}\.(com|live|online|me|io|org|yahoo)$/;
console.log(pattern2.test(email));

let password = "Sadfa3239@!@?.";
let pattern3 = /^[A-Z]*[a-z]*[0-9]*(@|#|%|&|!|\.|\?|)*$/;
console.log(pattern3.test(password));
