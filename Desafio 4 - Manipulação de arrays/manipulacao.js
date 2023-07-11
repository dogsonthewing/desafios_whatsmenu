//Declaração das variáveis
let array = [];
n = 0;

//Cria a array de 0 a 10
for (let i=1; i<=10; i++)  {
	  array.push(i);
}
console.log(array)

//Adiona 0 a primeira posição do array
array.unshift(0)
console.log(array)

//Adiciona 11 a última posição do array
array.push(11)
console.log(array)

//Remove o 5 do array
array.splice(array.indexOf(5) , 1)
console.log(array)

//Remove o 8 e adiciona [20, 21 ,22] no lugar
array.splice(array.indexOf(8) , 1 , 20 , 21 , 22)
console.log(array)
