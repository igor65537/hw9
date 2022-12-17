const input = prompt("Введите трехзначное число");
if (/^\d{3}$/.test(input)) {
  console.log(
    input.split("").reduce((acc, cur) => Number(acc) + Number(cur))
  );
} else {
  console.error("Введите трехзначное число");
}
