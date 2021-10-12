let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let counterValue = document.getElementById("counterValue");

let counter = 0;

//increasing the value + 1 when the increase btn is clicked
increment.addEventListener("click", () => {
    counter++;
    counterValue.innerText = counter;
})

//decreasing the value - 1 when the decrease btn is clicked
decrement.addEventListener("click", () => {
    counter--;
    counterValue.innerText = counter;
})
