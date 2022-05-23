const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increase");
const decrementBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
});
