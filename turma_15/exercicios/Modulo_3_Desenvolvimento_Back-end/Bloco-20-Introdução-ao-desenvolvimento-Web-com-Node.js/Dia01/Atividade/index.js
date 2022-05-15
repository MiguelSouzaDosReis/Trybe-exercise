const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let mensagem = scripts
  .map((script, index) => ` ${index + 1} - ${script.name} `);
  
  console.log("Escolha o numero do script do jogo")

const scriptNumber = readline.questionInt(mensagem) - 1 ;


 const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido, Tenta de novo');

require(script.script);