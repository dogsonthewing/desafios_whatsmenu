//Declaração do array
const array = [
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
];

//Declaração e criação do array reduzido utilizando map
const arrayFinal = array.map(({ nome, idade }) => ({ nome, idade }));

console.log(arrayFinal);