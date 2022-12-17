const input = +prompt("Введите число");
let sum = 0;
let count = 0;
for (let i = 1; i <= input; i += 2) {
  sum += i;
  count += 1;
}
console.log(sum / count);
