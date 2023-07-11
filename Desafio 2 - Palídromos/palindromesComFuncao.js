//Função que checa se a string é um palindrome - retorna true ou false
function checkPalindrome(str) {     
    for(let i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}

//Declaração das arrays
const array = ["arara" 	, "amor" 	, "asa" 	, "longo" 	, "ele" 	, "dinossáuro" 	, "esse" 	, "peppa" 	, "mamam" 	, "tartaruga" 	, "bandolin" 	, "matam" 	, "desodorante" 	, "mundo" 	, "metem" 	, "terra" 	, "água" 	, "mirim" 	, "fogo" 	, "sopapos"];
const palindromes = [];

//Roda as arrays utilizando a função para checar e insere na array palindromes
array.forEach(elemento => {
  if (checkPalindrome(elemento) === true)
  palindromes.push(elemento);
});

console.log(palindromes);