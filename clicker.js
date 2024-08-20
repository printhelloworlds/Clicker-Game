let money = 0;
let multiplier = 1;
let passivepoints = 0;
let upgrades = [
  [1, 15, true],
  [10, 500, true],
  [100, 10000, true],
  [10, 1000, false],
  [100, 25000, false],
  [1000, 100000, false],
  [1000, 150000, true],
  [10000, 500000, false],
];

function clickedbutton() {
  money += 1 * multiplier;
  updateScoreBoard();
}
function updateScoreBoard() {
  document.getElementById("money-text").textContent = money.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );
  document.getElementById("passive-point-text").textContent = passivepoints;
  document.getElementById("multiplier-text").textContent = multiplier;
}
function clickedUpgrade(index) {
  [amt, price, isMult] = upgrades[index];
  if (money >= price) {
    money -= price;
    if (isMult) {
      multiplier += amt;
    } else {
      passivepoints += amt;
    }
    const newPrice = price + price;
    upgrades[index][1] = newPrice;
    document
      .getElementById(index.toString())
      .querySelector("span").textContent = newPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    updateScoreBoard();
  } else {
    alert("You don't have the money");
  }
}

setInterval(() => {
  money += passivepoints;
  updateScoreBoard();
}, 1000);
