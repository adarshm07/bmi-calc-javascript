const isHeightRange = document.getElementById("isHeightRange");
const isWeightRange = document.getElementById("isWeightRange");

const isHeight = document.getElementById("isHeight");
const isWeight = document.getElementById("isWeight");

const btnBMI = document.getElementById("btnBMI");

isHeight.value = isHeightRange.value;
isWeight.value = isWeightRange.value;

function isUserHeight(x) {
  isHeight.value = x.value;
  isHeightRange.value = x.value;
  // console.log('Height: ' + isHeightRange.value);
}

function isUserWeight(y) {
  isWeight.value = y.value;
  isWeightRange.value = y.value;
  // console.log('Weight: ' + isWeightRange.value);
}

btnBMI.addEventListener("click", () => {
  let isBMI = isWeightRange.value / Math.pow(isHeightRange.value * 0.01, 2);
  // console.log(isBMI.toFixed(2));

  isBMI = isBMI.toFixed(2);
  document.getElementById("isBMI").innerHTML = isBMI;

  if(isBMI <= 18.5) {
        document.getElementById("isHealthy").textContent = "Thin";
  } else if( isBMI >= 18.6 && isBMI <= 24.9) {
    document.getElementById("isHealthy").textContent = "Healthy!";
  } else if( isBMI >= 25 && isBMI <= 29.9) {
    document.getElementById("isHealthy").textContent = "Overweight!";
  } else {
    document.getElementById("isHealthy").textContent = "Obese!";
  }
});