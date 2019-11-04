function getCube(n) {
    let res = "";
    for (let i = 3; i < n; i = i + 3) {
        res += i * i * i;

    }
    return res
}
let n = prompt('Пожалуйста, введите число');
alert(getCube(n));