// Get the date input element and set its maximum value to today's date
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

// Get the result element where the age will be displayed
const result = document.getElementById("result");

// Function to calculate age based on the input date
function calculateAge() {
  // Get the birth date from the input value
  const birthDate = new Date(userInput.value);

  // Get today's date
  let today = new Date();

  // Calculate the year difference
  let years = today.getFullYear() - birthDate.getFullYear();

  // Calculate the month difference
  let months = today.getMonth() - birthDate.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }

  // Calculate the day difference
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    const lasMonth = (new Date(
      birthDate.getFullYear(),
      birthDate.getMonth(),
      0
    ).days += lasMonth.getDate());
  }

  // Display the calculated age
  result.innerHTML = `You are <span>${years}</span>  years, <span>${months}</span> months, and  <span>${days}</span> days old.`;
}
