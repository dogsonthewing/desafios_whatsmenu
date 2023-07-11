//Declaração das variáveis
let array = [];
let arrayImpares = [];

//Criação da array de 1 a 30
for (let i=1; i<=30; i++)  {
  array.push(i);
}

//Filtro de números ímpares
array.forEach(elemento => {
  if (elemento % 2 !== 0 )
  arrayImpares.push(elemento);
});

console.log(arrayImpares);