//Declaração das variáveis
let n1 = 0, n2 = 1, n3;

//Calculo de sequência de fibonacci com um limitador de 100
while (n1 < 100) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}