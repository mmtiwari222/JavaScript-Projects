// Get the date input element and set its maximum value to today's date
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

// Get the result element where the age will be displayed
let result = document.getElementById("result");

// Function to calculate age based on the input date
function calculateAge() {
  // Get the birth date from the input value
  let birthDate = new Date(userInput.value);

  // Extract day, month, and year from the birth date
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // Months are zero-based, so add 1
  let y1 = birthDate.getFullYear();

  // Get today's date
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1; // Months are zero-based, so add 1
  let y2 = today.getFullYear();

  //  Variables to store the calculated age
  let d3, m3, y3;

  // Calculate the year difference
  y3 = y2 - y1;

  // Calculate the month difference
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--; // If the current month is less than the birth month, subtract one year
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerHTML = `You are <span>${y3}</span>  years, <span>${m3}</span> months and  <span>${d3}</span> days old.`;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
