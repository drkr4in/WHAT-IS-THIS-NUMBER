let twoPlayer = function () {
  document.getElementById("choose-block").style.display = "none";
  document.getElementById("main-block-for2Players").style.display = "flex";
};

let getNumberFor1Player = function () {
  let valueFor1Player = Number(document.getElementById("inpFor1Player").value);
  if (1 <= valueFor1Player && valueFor1Player <= 100) {
    console.log("numbFor1Player = " + valueFor1Player);
    return Number(valueFor1Player);
  } else {
    return false;
  }
};

let getNumberFor2Player = function () {
  let valueFor2Player = Number(document.getElementById("inpFor2Player").value);
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
    restart();
    document.getElementById("resultFor1Player").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberInFor1Player === valueRFor1Player) {
    document.getElementById("resultFor1Player").innerHTML = "You win";
    document.getElementById("resultFor1Player").style.backgroundColor =
      "#229091";
    document.getElementById("resultFor1Player").style.color = "white";
    console.log("You win");
    document.getElementById("pushFor1Player").disabled = true;
    document.getElementById("inpFor1Player").value = "";
    return false;
  } else if (countFor1Player < 10 && NumberInFor1Player != valueRFor1Player) {
    if (NumberInFor1Player > valueRFor1Player) {
      document.getElementById("resultFor1Player").innerHTML = "Too much";
      document.getElementById("resultFor1Player").style.backgroundColor =
        "#E95A49";
      document.getElementById("resultFor1Player").style.color = "white";
      console.log("Too much");
    } else {
      document.getElementById("resultFor1Player").innerHTML = "Too low";
      document.getElementById("resultFor1Player").style.backgroundColor =
        "#E95A49";
      document.getElementById("resultFor1Player").style.color = "white";
      console.log("Too low");
    }

    console.log("Too much");
  } else {
    document.getElementById("resultFor1Player").innerHTML =
      "You loss, dont give up";
    document.getElementById("resultFor1Player").style.backgroundColor =
      "#E95A49";
    document.getElementById("resultFor1Player").style.color = "white";
    console.log("You loss, dont give up");
    document.getElementById("pushFor1Player").disabled = true;
    document.getElementById("inpFor1Player").value = "";

    return false;
  }
};

let resultFor2Player = function () {
  let NumberInFor2Player = getNumberFor2Player();
  if (!NumberInFor2Player) {
    restart();
    document.getElementById("resultFor2Player").innerHTML =
      "You should write number in range 1 to 100";
    return;
  }
  if (NumberInFor2Player === valueRFor2Player) {
    document.getElementById("resultFor2Player").innerHTML = "You win";
    document.getElementById("resultFor2Player").style.backgroundColor =
      "#229091";
    document.getElementById("resultFor2Player").style.color = "white";
    console.log("You win");
    document.getElementById("pushFor2Player").disabled = true;
    document.getElementById("inpFor2Player").value = "";
    return false;
  } else if (countFor2Player < 10 && NumberInFor2Player != valueRFor2Player) {
    if (NumberInFor2Player > valueRFor2Player) {
      document.getElementById("resultFor2Player").innerHTML = "Too much";
      document.getElementById("resultFor2Player").style.backgroundColor =
        "#E95A49";
      document.getElementById("resultFor2Player").style.color = "white";
      console.log("Too much");
    } else {
      document.getElementById("resultFor2Player").innerHTML = "Too low";
      document.getElementById("resultFor2Player").style.backgroundColor =
        "#E95A49";
      document.getElementById("resultFor2Player").style.color = "white";
      console.log("Too low");
    }

    console.log("Too much");
  } else {
    document.getElementById("resultFor2Player").innerHTML =
      "You loss, dont give up";
    document.getElementById("resultFor2Player").style.backgroundColor =
      "#E95A49";
    document.getElementById("resultFor2Player").style.color = "white";
    console.log("You loss, dont give up");
    document.getElementById("pushFor2Player").disabled = true;
    document.getElementById("inpFor2Player").value = "";

    return false;
  }
};

let restartFor1Player = function () {
  countFor1Player = 0;
  valueRFor1Player = Math.floor(Math.random() * 99 + 1);
  console.log("randomFor1Player = " + valueRFor1Player);
  arrFor1Player = [];
  document.getElementById("arrFor1Player").innerHTML = arrFor1Player;
  document.getElementById("resultFor1Player").innerHTML = "";
  document.getElementById("pushFor1Player").disabled = false;
  document.getElementById("inpFor1Player").value = "";
};

let restartFor2Player = function () {
  countFor2Player = 0;
  valueRFor2Player = Math.floor(Math.random() * 99 + 1);
  console.log("randomFor2Player = " + valueRFor2Player);
  arrFor2Player = [];
  document.getElementById("arrFor2Player").innerHTML = arrFor2Player;
  document.getElementById("resultFor2Player").innerHTML = "";
  document.getElementById("pushFor2Player").disabled = false;
  document.getElementById("inpFor2Player").value = "";
};

let pushFor1Player = function () {
  if (countFor1Player < 10) {
    arrFor1Player[countFor1Player] =
      document.getElementById("inpFor1Player").value;
    document.getElementById("arrFor1Player").innerHTML = arrFor1Player;
  }
  countFor1Player++;
};

let pushFor2Player = function () {
  if (countFor2Player < 10) {
    arrFor2Player[countFor2Player] =
      document.getElementById("inpFor2Player").value;
    document.getElementById("arrFor2Player").innerHTML = arrFor2Player;
  }
  countFor2Player++;
};

let arrFor1Player = [];
let arrFor2Player = [];
let valueRFor1Player = Math.floor(Math.random() * 100);
let valueRFor2Player = Math.floor(Math.random() * 100);
let countFor1Player = 0;
let countFor2Player = 0;

console.log("randomFor1Player = " + valueRFor1Player);
console.log("randomFor2Player = " + valueRFor2Player);

document
  .getElementById("buttonFor2players")
  .addEventListener("click", twoPlayer);

document
  .getElementById("pushFor1Player")
  .addEventListener("click", pushFor1Player);
document
  .getElementById("pushFor2Player")
  .addEventListener("click", pushFor2Player);

document
  .getElementById("pushFor1Player")
  .addEventListener("click", resultFor1Player);
document
  .getElementById("pushFor2Player")
  .addEventListener("click", resultFor2Player);

document
  .getElementById("restartFor1Player")
  .addEventListener("click", restartFor1Player);
document
  .getElementById("restartFor2Player")
  .addEventListener("click", restartFor2Player);

document
  .getElementById("backToMenuFrom2Player")
  .addEventListener("click", function () {
    document.getElementById("main-block-for2Players").style.display = "none";
    document.getElementById("choose-block").style.display = "flex";
  });
