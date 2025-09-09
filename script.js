/************************************
 * Part 1: Variables & Conditionals
 ************************************/
const output = document.getElementById("output");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
  let num = parseInt(document.getElementById("userNumber").value);

  if (isNaN(num)) {
    output.textContent = "❌ Please enter a valid number.";
  } else if (num > 10) {
    output.textContent = `✅ ${num} is greater than 10.`;
  } else {
    output.textContent = `ℹ️ ${num} is 10 or less.`;
  }
});

/************************************
 * Part 2: Functions
 ************************************/
// Function 1: Calculate total
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Format a string
function formatMessage(name) {
  return `Hello, ${name}! Welcome to JavaScript practice.`;
}

console.log(calculateTotal(5, 7)); // 12
console.log(formatMessage("Fadhili")); // Hello, Fadhili!

/************************************
 * Part 3: Loops
 ************************************/
// Example 1: for loop (countdown)
for (let i = 3; i > 0; i--) {
  console.log("Countdown:", i);
}

// Example 2: while loop
let counter = 1;
while (counter <= 3) {
  console.log("While loop count:", counter);
  counter++;
}

/************************************
 * Part 4: DOM Manipulation
 ************************************/
// DOM Interaction 1: Toggle highlight class
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  output.classList.toggle("highlight");
});

// DOM Interaction 2: Dynamically generate a list
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
  output.innerHTML = "<strong>Generated List:</strong>";
  const ul = document.createElement("ul");

  // Use forEach loop here
  ["Apple", "Banana", "Cherry"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  output.appendChild(ul);
});

// DOM Interaction 3: Change text content on load
output.textContent = "✅ Ready! Enter a number and click 'Check Number'.";
