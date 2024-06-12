var atkMain = null;
var atkWeapon1 = null;
var atkWeapon2 = null;
var atkSum = null;

function calcAtk() {
  let hardness = (document.getElementById("hardness").value!==null)?document.getElementById("hardness").value * 10:0;
  let age = (document.getElementById("age").value)?30 + prepareAge(document.getElementById("age").value):0;
  const IsFighter = document.getElementById("isfighter").checked ? 50 : 0;

  atkMain = hardness + age + IsFighter;
  document.getElementById("main_atk_result").value = atkMain;
}

function calcAtkWeapon1() {
  let hardness = document.getElementById("w_hardness1").value * 10;
  let age = 30 + prepareAge(document.getElementById("w_age1").value);
  const WasFighter = document.getElementById("w_wasfighter1").checked ? 50 : 0;

  atkWeapon1 = hardness + age + WasFighter;
  document.getElementById("w_atk_result1").value = atkWeapon1;
}

function calcAtkWeapon2() {
  let hardness = document.getElementById("w_hardness2").value * 10;
  let age = 30 + prepareAge(document.getElementById("w_age2").value);
  const WasFighter = document.getElementById("w_wasfighter2").checked ? 50 : 0;

  atkWeapon2 = hardness + age + WasFighter;
  document.getElementById("w_atk_result2").value = atkWeapon2;
}

function calcAtkMoon() {
  let hardness = document.getElementById("hardness").value * 10;
  let age = 30 + prepareAge(document.getElementById("age").value);

  atkMain = hardness + age + 100;
  document.getElementById("main_atk_result").value = atkMain;
}

function calcTotalAtk() {
  calcAtk();
  calcAtkWeapon1();
  calcAtkWeapon2();

  atkSum = atkMain + atkWeapon1 + atkWeapon2;
  document.getElementById("atk_sum").value = atkSum;
}

function calcTotalAtkMoon() {
  calcAtkMoon();
  calcAtkWeapon1();
  calcAtkWeapon2();

  atkSum = atkMain + atkWeapon1 + atkWeapon2;
  document.getElementById("atk_sum").value = atkSum;
}

function prepareAge(age) {
  let n = age - 500;
  if (n % 500 === 0) {
    return (n / 500) * 10;
  }
  let hDigit = Math.floor(n / 1000);
  if (n % 1000 > 500) {
    return (((hDigit + 1) * 1000) / 500) * 10;
  } else if (n % 1000 <= 500) {
    return ((hDigit * 1000 + 500) / 500) * 10;
  } else {
    return (n / 500) * 10;
  }
}

function weaponExist() {
  const Radios = document.querySelectorAll("#radioWeapon input");
  if (Radios["0"].checked) {
    atkWeapon1 = 0;
    atkWeapon2 = 0;
    document.getElementById("weapon01").style.visibility = "collapse";
    document.getElementById("weapon01").style.height = "0";
    document.getElementById("weapon02").style.visibility = "collapse";
    document.getElementById("weapon02").style.height = "0";
  }
  else if (Radios["1"].checked) {
    atkWeapon1 = null;
    atkWeapon2 = 0;
    document.getElementById("weapon01").style.visibility = "visible";
    document.getElementById("weapon01").style.height = "auto";
    document.getElementById("weapon02").style.visibility = "collapse";
    document.getElementById("weapon02").style.height = "0";
  }
  else if (Radios["2"].checked) {
    atkWeapon1 = null;
    atkWeapon2 = null;
    document.getElementById("weapon01").style.visibility = "visible";
    document.getElementById("weapon01").style.height = "auto";
    document.getElementById("weapon02").style.visibility = "visible";
    document.getElementById("weapon02").style.height = "auto";
  }
}