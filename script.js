function snapCrackle(maxValue) {
  let palavra = "";
  for (let i = 0; i <= maxValue; i++) {
    if (i % 2 !== 0) {
      palavra += "Snap";
    } else if (i % 5 == 0) {
      palavra += "Crackle";
    } else if (i % 2 !== 0 && i % 5 == 0) {
      palavra += "SnapCrackle";
    } else {
      palavra += i;
    }
    if (i !== maxValue) {
      palavra += ", ";
    }
  }
  console.log(palavra);
}

function calculaSnapCrackle() {
  const numero = document.getElementById("numero").value;
  snapCrackle(numero);
}
