"use strict";

let counter = 0;
const bars = [];

window.addEventListener("load", init);

function init() {
  setTimeout(loop, 500);
}

function loop() {
  const queueSize = getNumberOfCustomers();
  console.log("bars", bars);
  if (counter < 40) {
    bars.unshift(queueSize);
    counter++;
    makeBar();
  } else {
    bars.length = 39;
    bars.unshift(queueSize);

    makeBar();
  }

  init();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function makeBar() {
  {
    const barContainer = document.querySelector("#bars");
    barContainer.innerHTML += `<div class="bar" style= "height: ${
      (bars[0] / 32) * 100
    }%;"></div>`;
  }
}
