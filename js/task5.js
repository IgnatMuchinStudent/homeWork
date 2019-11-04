function getColor() {
    let r = Math.round((Math.random() * (256)));
    let g = Math.round((Math.random() * (256)));
    let b = Math.round((Math.random() * (256)));
    alert("Ваш цвет " + r + ": " + g + ": " + b );
}
getColor()