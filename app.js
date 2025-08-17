let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let currentInput = ""; 

buttons.forEach(button => {
button.addEventListener("click", () => {
let value = button.innerText;

if (value === "AC") {
currentInput = "";
inputBox.value = "0";
}
else if (value === "DEL") {
currentInput = currentInput.slice(0, -1);
inputBox.value = currentInput || "0";
}
else if (value === "=") {
try {
currentInput = eval(currentInput).toString();
inputBox.value = currentInput;
} catch {
inputBox.value = "Error";
currentInput = "";
}
}
else if (button.id === "plusminus") {
if (currentInput) {
currentInput = (eval(currentInput)).toString();
inputBox.value = currentInput;
}
}
else {
currentInput += value;
inputBox.value = currentInput;
}
});
});
