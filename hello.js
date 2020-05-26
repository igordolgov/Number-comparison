let userNumber1;
let userNumber2;

while (isNaN(parseInt(userNumber1))) {
  userNumber1 = prompt('Введите первое число');
}
while (isNaN(parseInt(userNumber2))) {
  userNumber2 = prompt('Введите второе число');
}
let comparisonResult = userNumber2 - userNumber1;

if (comparisonResult < 0) {
  alert('Первое число больше второго');
}
else if (comparisonResult > 0) {
  alert('Второе число больше первого');
}
else if (comparisonResult == 0) {
  alert('Числа равны');
}
