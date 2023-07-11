// Declaração dos arrays
const array = ["arara", "amor", "asa", "longo", "ele", "dinossáuro", "esse", "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem", "terra", "água", "mirim", "fogo", "sopapos"];
const palindromes = [];

// Preenche o array palindromes apenas com os resultados true do teste
array.forEach(elemento => {
  if (elemento === elemento.split('').reverse().join('')) {
    palindromes.push(elemento);
  }
});

console.log(palindromes);