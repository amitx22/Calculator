let display = document.getElementById("display");
let historyList = document.getElementById("history");
let themeToggle = document.getElementById("themeToggle");

// Append values
function appendValue(value) {
  display.value += value;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Delete
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);
    
    // Add to history
    let li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    appendValue(e.key);
  } 
  else if (e.key === "Enter") {
    calculate();
  } 
  else if (e.key === "Backspace") {
    deleteLast();
  } 
  else if (e.key === "Escape") {
    clearDisplay();
  }
});