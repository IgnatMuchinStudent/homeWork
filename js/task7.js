function remSpaces(str, maxlength)
{
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
document.write(remSpaces("Ежжи, шшааа  , Кама Пуля   "))