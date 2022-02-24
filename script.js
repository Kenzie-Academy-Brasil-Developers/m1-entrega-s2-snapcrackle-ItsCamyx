function primo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

function snapCrackle(maxValue) {
  let palavra = "";
  for (let i = 1; i <= maxValue; i++) {
    if (primo(i)) {
      palavra += "Prime";
    } else if (i % 2 !== 0 && i % 5 == 0) {
      palavra += "SnapCrackle";
    } else if (i % 2 !== 0) {
      palavra += "Snap";
    } else if (i % 5 == 0) {
      palavra += "Crackle";
      //palavra = palavra + "Crackle"
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
