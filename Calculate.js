let weightInput = document.getElementById("weightInput");
let heightInput = document.getElementById("heightInput");
let score = 0;
let scoreText = document.getElementById("ScoreText");

function CalculateBMI()
{
  score = weightInput.value/(heightInput.value * heightInput.value);

  if(isNaN(score))
  {
    if(isNaN(weightInput.value))
    {
      weightInput.style.color = "darkred";
    }
  }
  else{
    scoreText.innerHTML = score.toFixed(2);
    weightInput.style.color = "rgb(88, 88, 88)";
  }

 

  event.preventDefault();
}