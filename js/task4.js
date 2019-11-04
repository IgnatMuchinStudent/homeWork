function getMultiplicity(x, a) {
   return (x % a === 0? "Кратное": "Некратное");
   } 
let x = prompt("Введите х");
let a = prompt("Введите а");
alert(getMultiplicity(x,a));
