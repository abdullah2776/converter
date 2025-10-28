document.getElementById("convertBtn").addEventListener("click", convertToMiles);
document.getElementById("clearBtn").addEventListener("click", clearFields);

function convertToMiles() {
  const kmInput = document.getElementById("kilometers");
  const result = document.getElementById("result");
  const kilometers = parseFloat(kmInput.value);

  if (isNaN(kilometers) || kilometers < 0) {
    result.textContent = "⚠️ Please enter a valid positive number.";
    result.style.color = "red";
    return;
  }

  const miles = (kilometers * 0.621371).toFixed(3);
  result.textContent = `${kilometers} kilometers = ${miles} miles`;
  result.style.color = "green";
}

function clearFields() {
  document.getElementById("kilometers").value = "";
  document.getElementById("result").textContent = "";
}
