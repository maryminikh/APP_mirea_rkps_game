// Для игры очень желательно реализовать автоматическое тестирование в виде набора диалогов игрока с компьютером.
// Каждый диалог автоматически прогоняется в игре с получением лога.

// todo Далее полученный лог сравнивается с эталонным логом из оригинальной версии игры.

// Задача состоит в том, чтобы удостовериться, что портированная игра ведет себя в точности как оригинал.


// stdin sdtout сравнивать что получается в двух программах https://blog.logrocket.com/using-stdout-stdin-stderr-node-js/
// сделать два процесса https://www.digitalocean.com/community/tutorials/how-to-launch-child-processes-in-node-js

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const fs = require("fs")

fs.open("./logs.txt", "w", (err, fd) => {
  if (err) throw Error(err.message)
  process.stdin.on("data", data => {
    fs.write(fd, data.toString() + "\n", (err) => {
      if (err) throw Error(err.message)
    })
  })
})




const { exec } = require('child_process');
node('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});


// для basic

// python
// через git bash
EXE = "С:\\ProgramFiles\\Vintage BASIC\\bin\\vintbas.exe"
ARG = "game.bas"




