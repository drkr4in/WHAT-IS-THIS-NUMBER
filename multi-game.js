let twoPlayer = function () {
  document.querySelector(".main-menu").style.display = "none";
  document.querySelector(".multi-game").style.display = "flex";
};

let getNumberFor1Player = function () {
  let valueFor1Player = Number(
    document.querySelector(".input-block__input-for-one-player").value
  );
  if (1 <= valueFor1Player && valueFor1Player <= 100) {
    console.log("numbFor1Player = " + valueFor1Player);
    return Number(valueFor1Player);
  } else {
    return false;
  }
};

let getNumberFor2Player = function () {
  let valueFor2Player = Number(
    document.querySelector(".input-block__input-for-two-player").value
  );
  if (1 <= valueFor2Player && valueFor2Player <= 100) {
    console.log("numbFor1Player = " + valueFor2Player);
    return Number(valueFor2Player);
  } else {
    return false;
  }
};

let resultFor1Player = function () {
  let NumberInFor1Player = getNumberFor1Player();
  if (!NumberInFor1Player) {
    restartFor1Player();
    document.querySelector(".multi-game__result-for-one-player").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberInFor1Player === valueRFor1Player) {
    document.querySelector(".multi-game__result-for-one-player").innerHTML =
      "You win";
    document.querySelector(
      ".multi-game__result-for-one-player"
    ).style.backgroundColor = "#229091";
    document.querySelector(".multi-game__result-for-one-player").style.color =
      "white";
    console.log("You win");
    document.querySelector(".input-block__push-for-one-player").disabled = true;
    document.querySelector(".input-block__input-for-one-player").value = "";
    return false;
  } else if (countFor1Player < 10 && NumberInFor1Player != valueRFor1Player) {
    if (NumberInFor1Player > valueRFor1Player) {
      document.querySelector(".multi-game__result-for-one-player").innerHTML =
        "Too much";
      document.querySelector(
        ".multi-game__result-for-one-player"
      ).style.backgroundColor = "#E95A49";
      document.querySelector(".multi-game__result-for-one-player").style.color =
        "white";
      console.log("Too much");
    } else {
      document.querySelector(".multi-game__result-for-one-player").innerHTML =
        "Too low";
      document.querySelector(
        ".multi-game__result-for-one-player"
      ).style.backgroundColor = "#E95A49";
      document.querySelector(".multi-game__result-for-one-player").style.color =
        "white";
      console.log("Too low");
    }

    console.log("Too much");
  } else {
    document.querySelector(".multi-game__result-for-one-player").innerHTML =
      "You loss, dont give up";
    document.querySelector(
      ".multi-game__result-for-one-player"
    ).style.backgroundColor = "#E95A49";
    document.querySelector(".multi-game__result-for-one-player").style.color =
      "white";
    console.log("You loss, dont give up");
    document.querySelector(".input-block__push-for-one-player").disabled = true;
    document.querySelector(".input-block__input-for-one-player").value = "";

    return false;
  }
};

let resultFor2Player = function () {
  let NumberInFor2Player = getNumberFor2Player();
  if (!NumberInFor2Player) {
    restartFor2Player();
    document.querySelector(".multi-game__result-for-two-player").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberInFor2Player === valueRFor2Player) {
    document.querySelector(".multi-game__result-for-two-player").innerHTML =
      "You win";
    document.querySelector(
      ".multi-game__result-for-two-player"
    ).style.backgroundColor = "#229091";
    document.querySelector(".multi-game__result-for-two-player").style.color =
      "white";
    console.log("You win");
    document.querySelector(".input-block__push-for-two-player").disabled = true;
    document.querySelector(".input-block__input-for-two-player").value = "";
    return false;
  } else if (countFor2Player < 10 && NumberInFor2Player != valueRFor2Player) {
    if (NumberInFor2Player > valueRFor2Player) {
      document.querySelector(".multi-game__result-for-two-player").innerHTML =
        "Too much";
      document.querySelector(
        ".multi-game__result-for-two-player"
      ).style.backgroundColor = "#E95A49";
      document.querySelector(".multi-game__result-for-two-player").style.color =
        "white";
      console.log("Too much");
    } else {
      document.querySelector(".multi-game__result-for-two-player").innerHTML =
        "Too low";
      document.querySelector(
        ".multi-game__result-for-two-player"
      ).style.backgroundColor = "#E95A49";
      document.querySelector(".multi-game__result-for-two-player").style.color =
        "white";
      console.log("Too low");
    }

    console.log("Too much");
  } else {
    document.querySelector(".multi-game__result-for-two-player").innerHTML =
      "You loss, dont give up";
    document.querySelector(
      ".multi-game__result-for-two-player"
    ).style.backgroundColor = "#E95A49";
    document.querySelector(".multi-game__result-for-two-player").style.color =
      "white";
    console.log("You loss, dont give up");
    document.querySelector(".input-block__push-for-two-player").disabled = true;
    document.querySelector(".input-block__input-for-two-player").value = "";

    return false;
  }
};

let restartFor1Player = function () {
  countFor1Player = 0;
  valueRFor1Player = Math.floor(Math.random() * 99 + 1);
  console.log("randomFor1Player = " + valueRFor1Player);
  arrFor1Player = [];
  document.querySelector(".multi-game__array-for-one-player").innerHTML =
    ". . .";
  document.querySelector(".multi-game__result-for-one-player").innerHTML =
    ". . .";
  document.querySelector(
    ".multi-game__result-for-one-player"
  ).style.backgroundColor = "#f2dca2";
  document.querySelector(".multi-game__result-for-one-player").style.color =
    "black";
  document.querySelector(".input-block__push-for-one-player").disabled = false;
  document.querySelector(".input-block__input-for-one-player").value = "";
};

let restartFor2Player = function () {
  countFor2Player = 0;
  valueRFor2Player = Math.floor(Math.random() * 99 + 1);
  console.log("randomFor2Player = " + valueRFor2Player);
  arrFor2Player = [];
  document.querySelector(".multi-game__array-for-two-player").innerHTML =
    ". . .";
  document.querySelector(".multi-game__result-for-two-player").innerHTML =
    ". . .";
  document.querySelector(
    ".multi-game__result-for-two-player"
  ).style.backgroundColor = "#f2dca2";
  document.querySelector(".multi-game__result-for-two-player").style.color =
    "black";
  document.querySelector(".input-block__push-for-two-player").disabled = false;
  document.querySelector(".input-block__input-for-two-player").value = "";
};

let pushFor1Player = function () {
  if (countFor1Player < 10) {
    arrFor1Player[countFor1Player] = document.querySelector(
      ".input-block__input-for-one-player"
    ).value;
    document.querySelector(".multi-game__array-for-one-player").innerHTML =
      arrFor1Player;
  }
  countFor1Player++;
};

let pushFor2Player = function () {
  if (countFor2Player < 10) {
    arrFor2Player[countFor2Player] = document.querySelector(
      ".input-block__input-for-two-player"
    ).value;
    document.querySelector(".multi-game__array-for-two-player").innerHTML =
      arrFor2Player;
  }
  countFor2Player++;
};

let arrFor1Player = [];
let arrFor2Player = [];
let valueRFor1Player = Math.floor(Math.random() * 100);
let valueRFor2Player = Math.floor(Math.random() * 100);
let countFor1Player = 0;
let countFor2Player = 0;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log("randomFor1Player = " + valueRFor1Player);
console.log("randomFor2Player = " + valueRFor2Player);
console.log("screenWidth= " + screenWidth);
console.log("screenHeight = " + screenHeight);

if (screenWidth < 1200) {
  document.querySelector(".main-menu__buttonTwo").disabled = "true";
}

document
  .querySelector(".main-menu__buttonTwo")
  .addEventListener("click", twoPlayer);

document
  .querySelector(".input-block__push-for-one-player")
  .addEventListener("click", pushFor1Player);
document
  .querySelector(".input-block__push-for-two-player")
  .addEventListener("click", pushFor2Player);

document
  .querySelector(".input-block__push-for-one-player")
  .addEventListener("click", resultFor1Player);
document
  .querySelector(".input-block__push-for-two-player")
  .addEventListener("click", resultFor2Player);

document
  .querySelector(".input-block__restart-for-one-player")
  .addEventListener("click", restartFor1Player);
document
  .querySelector(".input-block__restart-for-two-player")
  .addEventListener("click", restartFor2Player);

document
  .querySelector(".multi-game__back-to-menu")
  .addEventListener("click", function () {
    console.log("click");
    document.querySelector(".multi-game").style.display = "none";
    document.querySelector(".main-menu").style.display = "flex";
  });
