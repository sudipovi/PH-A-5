// Alert 
// document.getElementById("call-btn").addEventListener("click", function (e) {
//   e.preventDefault;
//   alert("Calling Fire Service 999");
// });

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


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling National Emergency 999");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

 
});

document.getElementById("call-btn-plc").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("plc-name").innerText;
  const num = getElement("plc-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling National Emergency 999");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

  
});

document.getElementById("call-btn-frs").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("frs-name").innerText;
  const num = getElement("frs-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Fire Service 999");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

    
});

document.getElementById("call-btn-amb").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("amb-name").innerText;
  const num = getElement("amb-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Ambulance Service 100");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

   
});

document.getElementById("call-btn-wch").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("wch-name").innerText;
  const num = getElement("wch-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Women & Child Helpline 1998-2505");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

    
});

document.getElementById("call-btn-ach").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("ach-name").innerText;
  const num = getElement("ach-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Anti-Corruption Helpline 105 ");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

    
});

document.getElementById("call-btn-eh").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("eh-name").innerText;
  const num = getElement("eh-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Electricity Helpline Helpline 2505 ");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

    
});

document.getElementById("call-btn-bh").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("bh-name").innerText;
  const num = getElement("bh-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling BRAC Helpline 2505 ");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

    
});

document.getElementById("call-btn-br").addEventListener("click", function (e) {
  e.preventDefault;

  const title = getElement("br-name").innerText;
  const num = getElement("br-num").innerText;
  console.log(title, num);

  let coin = getElement("coin-cnt").innerText;

  let lastCoin = Number(coin) - 20;
  console.log(lastCoin);

  getElement("coin-cnt").innerText = lastCoin;


  if (getElement("coin-cnt").innerText < 20) {
    alert("You don't have sufficient balance.");
    getElement("coin-cnt").innerText = 0;
  }
  else {
    alert("Calling Bangladesh Railway 999 ");
    getElement("coin-cnt").innerText = lastCoin;
    const historyPart = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `<div class="w-[250px] h-[80px] rounded-sm m-5 bg-gray-100 shadow-md p-3">
                           <p class="hind text-xm">${title}</p>
                           <p>${num}</p>
                         </div>`
  historyPart.append(newHistory);
  }

  
});



// Copy Button

document.getElementById("copy-btn").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;

  alert("Copy Count Increased");
});

document.getElementById("copy-btn-plc").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-frs").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-amb").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-wch").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-ach").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-eh").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-ach").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-bh").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});

document.getElementById("copy-btn-br").addEventListener("click", function (e) {
  e.preventDefault;

  let copy = getElement("copy-cnt").innerText;

  let totalCopy = Number(copy) + 1;

  console.log(totalCopy);
  getElement("copy-cnt").innerText = totalCopy;
  alert("Copy Count Increased");
});



// hrt button
document.getElementById("hrt-btn").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-plc").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});


document.getElementById("hrt-btn-frs").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-amb").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-wch").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-ach").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-eh").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});


document.getElementById("hrt-btn-bh").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

document.getElementById("hrt-btn-br").addEventListener("click", function (e) {
  e.preventDefault;

  let hrt = getElement("hrt-cnt").innerText;

  let totalHrt = Number(hrt) + 1;
  getElement("hrt-cnt").innerText = totalHrt;
});

// Clear button

document.getElementById("clear-btn").addEventListener("click", function() {
      document.getElementById("call-history").innerHTML = "";
    });