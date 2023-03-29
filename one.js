let onePlayer = function () {
  document.getElementById("choose-block").style.display = "none";
  document.getElementById("main-block-for1Player").style.display = "flex";
};

let getNumber = function () {
  let value = Number(document.getElementById("inp").value);
  if (1 <= value && value <= 100) {
    console.log("our numb = " + value);
    return Number(value);
  } else {
    return false;
  }
};

let result = function () {
  let NumberIn = getNumber();
  if (!NumberIn) {
    restart();
    document.getElementById("result").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberIn === valueR) {
    document.getElementById("result").innerHTML = "You win";
    document.getElementById("result").style.backgroundColor = "#229091";
    document.getElementById("result").style.color = "white";
    console.log("You win");
    document.getElementById("push").disabled = true;
    document.getElementById("inp").value = "";
    return false;
  } else if (count < 10 && NumberIn != valueR) {
    if (NumberIn > valueR) {
      document.getElementById("result").innerHTML = "Too much";
      document.getElementById("result").style.backgroundColor = "#E95A49";
      document.getElementById("result").style.color = "white";
      console.log("Too much");
    } else {
      document.getElementById("result").innerHTML = "Too low";
      document.getElementById("result").style.backgroundColor = "#E95A49";
      document.getElementById("result").style.color = "white";
      console.log("Too low");
    }
    document.getElementById("inp").value = "";
    console.log("Too much");
  } else {
    document.getElementById("result").innerHTML = "You loss, dont give up";
    document.getElementById("result").style.backgroundColor = "#E95A49";
    document.getElementById("result").style.color = "white";
    console.log("You loss, dont give up");
    document.getElementById("push").disabled = true;
    document.getElementById("inp").value = "";
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
  document.getElementById("arr").innerHTML = ". . .";
  document.getElementById("result").innerHTML = ". . .";
  document.getElementById("result").style.backgroundColor = "#f2dca2";
  document.getElementById("result").style.color = "black";
  document.getElementById("push").disabled = false;
  document.getElementById("inp").value = "";
};

let push = function () {
  if (count < 10) {
    arr[count] = document.getElementById("inp").value;
    document.getElementById("arr").innerHTML = arr;
  }
  count++;
};

document.getElementById("main-block-for1Player").style.display = "none";
document.getElementById("main-block-for2Players").style.display = "none";

let valueR = Math.floor(Math.random() * 100);
console.log("random = " + valueR);

let arr = [];
let count = 0;

document
  .getElementById("buttonFor1player")
  .addEventListener("click", onePlayer);

document
  .getElementById("backToMenuFrom1Player")
  .addEventListener("click", function () {
    document.getElementById("main-block-for1Player").style.display = "none";
    document.getElementById("choose-block").style.display = "flex";
  });

document.getElementById("push").addEventListener("click", push);

document.getElementById("push").addEventListener("click", result);

document.getElementById("restart").addEventListener("click", restart);
