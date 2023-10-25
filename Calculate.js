let weightInput = document.getElementById("weightInput");
let heightInput = document.getElementById("heightInput");

function CalculateBMI()
{
  console.log(weightInput.value);
  console.log(heightInput.value);
  console.log(weightInput.value/(heightInput.value * heightInput.value));
}