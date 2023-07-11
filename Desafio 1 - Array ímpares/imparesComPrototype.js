// Declaração de função que filtra os números ímpares
const retornaImpares = function() {
  return this.filter(elemento => elemento % 2 !== 0);
};

// Adicionando a função ao prototype do Array
Array.prototype.retornaImpares = retornaImpares;

// Declaração das variáveis
const array = [];
const n = 0;

// Criação da array de 1 a 30
for (let i = 1; i <= 30; i++) {
  array.push(i);
}

// Filtra os números ímpares
const arrayImpares = array.retornaImpares();

console.log(arrayImpares);