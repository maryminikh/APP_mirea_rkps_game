"use strict";

// todo подключение ThreeJS
var THREE = require('three');
var css = require("./css/main.css");

function tab(space) {
  let str = "";
  while (space-- > 0)
    str += " ";
  return str;
}

function print(str) {
  document.getElementById("output").appendChild(document.createTextNode(str));
}

function input() {
  let input_element;
  let input_str;

  return new Promise(function (resolve) {
    input_element = document.createElement("INPUT");

    print("? ");
    input_element.setAttribute("type", "text");
    input_element.setAttribute("length", "50");
    document.getElementById("output").appendChild(input_element);
    input_element.focus();
    input_str = undefined;
    input_element.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) { //13 is Enter
        input_str = input_element.value;
        document.getElementById("output").removeChild(input_element);
        print(input_str);
        print("\n");
        resolve(input_str);
      }
    });
  });
}

// Z - кол-во рандомных значений
function FNR(Z) {
  return Math.floor(Z * Math.random());
}

const data_content = [
  "A POT OF GOLD",
  "A BEAUTIFUL MAIDEN",
  "A MAN EATING TIGER",
  "NOTHING",
  "$22.59",
  "A ROLLS ROYCE",
  "THE KEYS TO THE WORLD"
]

const data_sound = [
  "OPEN SESAME!",
  "C-R-E-E-E-E-E-A-A-K!",
  "WA LAH!",
  "TA-DAH!",
  "ABRACADABRA!",
  "CLICK !!!!!!!!?!???????!!!!!!!!",
  "SURPRISE!"
]

//адекватное кол-во попыток
// let T_tries = 10 + FNR(21);

// читкод
// let T_tries = 10000000000;

let K_array_of_right_keys = new Array(20);
let D_current_door = 1;

const StartGame = async () => {
  let N_locked_doors = 3 + FNR(3);
  let K3_keys = 8 + FNR(5);
  let T_tries = 10 + FNR(21);

  print("\n");
  print(`THERE ARE ${N_locked_doors} LOCKED DOORS AND THERE ARE ${K3_keys} KEYS (0-${K3_keys - 1})\n`);
  print(`YOU WILL HAVE ${T_tries - 1} TRIES TO OPEN THEM ALL\n`);
  print(`(SOME KEYS MAY OPEN MORE THAN ONE DOOR)\n\n`);

  //заполнение массива
  for (let x = 1; x <= N_locked_doors; x++) {
    K_array_of_right_keys[x] = FNR(K3_keys);

    console.log('array', K_array_of_right_keys)
  }

  T_tries--;

  // текущая попытка
  while (T_tries > 0) {
    print(`TRIES LEFT = ${T_tries}       DOOR #${D_current_door}  KEY`)
    const K2_chosen_key = await input();

    if (K2_chosen_key != K_array_of_right_keys[D_current_door]) {
      T_tries--;
      if (T_tries == 0) {
        console.log('out of tries')

        break;
      }
      console.log('wrong key:', K2_chosen_key, 'right:', K_array_of_right_keys[D_current_door])

      continue;
    }

    print(`${data_sound[FNR(7)]} \n`);
    D_current_door++;

    if (D_current_door > N_locked_doors) {
      break;
    }
  }

  print("\n");
  if (D_current_door === N_locked_doors + 1) {
    print(`YOU DID IT, BEHIND DOOR #${N_locked_doors} IS...........................\n`);
    print(`${data_content[FNR(7)]} !!\n`);

    await Question();

  } else {
    print(`YOU LOSE,  THE REST OF THE KEYS ARE:\n`);
    for (let X = D_current_door; X <= N_locked_doors; X++) {
      print(`\nDOOR ${X} \n KEY ${K_array_of_right_keys[X]}  \n`);
    }

    await Question();
  }
}

async function Question() {
  print(`\nDO YOU WANT TO PLAY AGAIN (YES SIR! OR NO SIR)!\n`)

  let Q = await input();

  if (Q === "YES SIR!") {
    await StartGame();
  }
  if (Q === "NO SIR!") {
    return 0;
  } else {
    print(`\nHEY, I DIDN'T JUST FALL OFF A TURNIP TRUCK, YA KNOW!!!!!\n`);
    await Question();
  }
}

async function main() {

  print(tab(27) + "DOORS\n");
  print(tab(20) + "CREATIVE COMPUTING\n");
  print(tab(18) + "MORRISTOWN, NEW JERSEY\n");
  print("\n");
  print("\n");
  print("\n");

  await StartGame();
}

main();
