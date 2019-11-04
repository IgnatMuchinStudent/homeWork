function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = x * x;
    }
    return result;
}
let x = prompt("Введите х");
let n = prompt("Введите n")
alert(pow(x, n))