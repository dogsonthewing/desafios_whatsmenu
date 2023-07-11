//Declaração do objeto
const objeto = {
    jason: "Jason",
    thais: "Thaís",
    liz: "Liz",
    jennei: "Jennei",
    jenyffer: "Jennyfer",
    joao: "João",
    bola: "Bola",
    gato: "Gato",
    jaguar: "Jaguar"
  };

//O for roda cada propriedade do objeto e deleta todas que não iniciam com "j"
for (let propriedade in objeto) {
  if (!propriedade.startsWith('j')) {
    delete objeto[propriedade];
  }
}
  
  console.log(objeto);