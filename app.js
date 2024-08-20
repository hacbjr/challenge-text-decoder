function displayText(tag, text) {
  let userOutput = document.querySelector(tag);
  userOutput.innerHTML = text;
}

function secondScreen() {
  displayText("h3", "");
  displayText("h4", "");

  document.getElementById("lupe-man").style.display = "none";

  let copyButton = document.getElementById("copyButton");
  copyButton.style.visibility = "visible";
  copyButton.style.pointerEvents = "auto";

  document.getElementById("messageToCopy").style.visibility = "visible";
}

function encryptText() {
  let inputText = document.querySelector("textarea").value;

  if (removeDiacritics(inputText.trim()) != "") {
    let encryptedText = removeDiacritics(inputText.toLowerCase())
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    displayText("h2", encryptedText);
    secondScreen();
    document.querySelector("textarea").value = "";
  } else {
    alert(
      "Erro #01:\nPor favor, entre com uma mensagem válida para ser criptografada ou descriptografada."
    );
    return 1;
  }
}

function decryptText() {
  let textToDecrypt = document.querySelector("textarea").value;

  if (removeDiacritics(textToDecrypt.trim()) != "") {
    let decryptedText = removeDiacritics(textToDecrypt.toLowerCase())
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    displayText("h2", decryptedText);
    secondScreen();
    document.querySelector("textarea").value = "";
  } else {
    alert(
      "Erro #01:\nPor favor, entre com uma mensagem válida para ser criptografada ou descriptografada."
    );
    return 2;
  }
}

function removeDiacritics(userInput) {
  return userInput
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z\s]/g, "");
}

function copyText() {
  let textToClipboard = document.getElementById("messageToCopy").innerText;

  navigator.clipboard.writeText(textToClipboard);
  document.getElementById("messageToCopy").innerText = "";
  document.getElementById("messageToCopy").style.visibility = "hidden";
  location.reload();
}
