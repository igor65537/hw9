const circle = 19;
const square = 25;
const aa = Math.sqrt(square);
const r = Math.sqrt(circle / Math.PI);
if (aa >= r * 2) {
  console.log("Поместится");
} else {
  console.log("Не поместится");
}
