let soloGame = function () {
  document.querySelector(".main-menu").style.display = "none";
  document.querySelector(".solo-game").style.display = "flex";
};

let getNumber = function () {
  let value = Number(document.querySelector(".input-block__input").value);
  if (1 <= value && value <= 100) {
    console.log("our numb = " + value);
    return value;
  } else {
    return false;
  }
};

let result = function () {
  let NumberIn = getNumber();
  if (!NumberIn) {
    restart();
    document.querySelector(".solo-game__result").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberIn === valueR) {
    document.querySelector(".solo-game__result").innerHTML = "You win";
    document.querySelector(".solo-game__result").style.backgroundColor =
      "#229091";
    document.querySelector(".solo-game__result").style.color = "white";
    console.log("You win");
    document.querySelector(".input-block__push").disabled = true;
    document.querySelector(".input-block__input").value = "";
    return false;
  } else if (count < 10 && NumberIn != valueR) {
    if (NumberIn > valueR) {
      document.querySelector(".solo-game__result").innerHTML = "Too much";
      document.querySelector(".solo-game__result").style.backgroundColor =
        "#E95A49";
      document.querySelector(".solo-game__result").style.color = "white";
      console.log("Too much");
    } else {
      document.querySelector(".solo-game__result").innerHTML = "Too low";
      document.querySelector(".solo-game__result").style.backgroundColor =
        "#E95A49";
      document.querySelector(".solo-game__result").style.color = "white";
      console.log("Too low");
    }
    document.querySelector(".input-block__input").value = "";
    console.log("Too much");
  } else {
    document.querySelector(".solo-game__result").innerHTML =
      "You loss, dont give up";
    document.querySelector(".solo-game__result").style.backgroundColor =
      "#E95A49";
    document.querySelector(".solo-game__result").style.color = "white";
    console.log("You loss, dont give up");
    document.querySelector(".input-block__push").disabled = true;
    document.querySelector(".input-block__input").value = "";
    return false;
  }
};

let restart = function () {
  count = 0;
  valueR = Math.floor(Math.random() * 99 + 1);
  console.log("random = " + valueR);
  arr = [];
  arrFor1Player = [];
  arrFor2Player = [];
  document.querySelector(".solo-game__array").innerHTML = ". . .";
  document.querySelector(".solo-game__result").innerHTML = ". . .";
  document.querySelector(".solo-game__result").style.backgroundColor =
    "#f2dca2";
  document.querySelector(".solo-game__result").style.color = "black";
  document.querySelector(".input-block__push").disabled = false;
  document.querySelector(".input-block__input").value = "";
};

let push = function () {
  if (count < 10) {
    arr[count] = document.querySelector(".input-block__input").value;
    document.querySelector(".solo-game__array").innerHTML = arr;
  }
  count++;
};

document.querySelector(".solo-game").style.display = "none";
document.querySelector(".multi-game").style.display = "none";

let valueR = Math.floor(Math.random() * 100);
console.log("random = " + valueR);

let arr = [];
let count = 0;

document
  .querySelector(".main-menu__buttonOne")
  .addEventListener("click", soloGame);

document
  .querySelector(".input-block__back-to-menu")
  .addEventListener("click", function () {
    console.log("click");
    document.querySelector(".solo-game").style.display = "none";
    document.querySelector(".main-menu").style.display = "flex";
  });

document.querySelector(".input-block__push").addEventListener("click", push);

document.querySelector(".input-block__push").addEventListener("click", result);

document
  .querySelector(".input-block__restart")
  .addEventListener("click", restart);
