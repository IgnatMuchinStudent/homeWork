function getMiddle(str) {
  let str1 = str.length / 2;
  if (str1 % 2 == 0) {
    alert(str.slice(str1 - 1, str1 + 1));
    return str;
  } else {
    alert(str.charAt(str1));
    return str;
  }
}
getMiddle("fjsf");
getMiddle("fds");