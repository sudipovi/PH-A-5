document.getElementById("call-btn").addEventListener("click", function (e) {
  e.preventDefault;
  alert("Calling Fire Service 999");
});

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Call button
document.getElementById("call-btn").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("fire-name").innerText;
  const num = getElement("fire-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;

  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
  }
});

// Copy Button

document.getElementById("copy-btn").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
});

// hrt button
document.getElementById("hrt-btn").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});
