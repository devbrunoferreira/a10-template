
// const pets = ['gato', 'cachorro', 'papagaio'];

// const numeros = [31, 7, 36, -15, 22, 'b', 'a'];

// const eu = [31, 'Bruno', true];

// const umNumero = [10];

// const vazio = [];
// console.log(vazio);

// console.log(pets.length);
// console.log(pets[3]);
// console.log(eu.includes(31));
// console.log(eu.includes('Bruno'));
// console.log(eu.includes(true));
// console.log(umNumero);
// console.log(umNumero.length);

// const copiaPets = pets;
// console.log(copiaPets, pets);
// copiaPets.push("rato");
// console.log(copiaPets, pets);

// const copiaPets = pets.slice();
// console.log(copiaPets, pets);
// copiaPets.push("rato");
// console.log(copiaPets, pets);
// copiaPets.splice(2, 2); // Remove '2' itens a partir do índice '2'
// console.log(copiaPets, pets);

// console.log(pets);
// console.log(pets.sort());
// console.log(numeros);
// console.log(numeros.sort());
// console.log(eu.sort());

// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.
const arrayNumeros = [15, 45, 3, 64, 89, 10, 8];
// 2. Imprima no console o array original, depois imprima-o ordenado em ordem crescente. 
//  Depois, imprima-o em ordem reversa.
console.log('1 - ARRAY ORIGINAL');
console.log(arrayNumeros);
console.log('');

console.log('2 - ARRAY ORDENADO - array.sort()');
console.log(arrayNumeros.sort()); // organiza os itens do array na ordem crescente;
console.log('');

console.log('3 - ARRAY REVERSE - array.reverse()');
console.log(arrayNumeros.reverse()); // organiza os itens do array na ordem decrescente;
console.log('');

let arrayNovo = arrayNumeros.slice().sort(); // desvincula o array copiado do array original;
//3. Remova o último item do array, e em seguida, adicione o número 6.
//	Depois, remova o número que está no índice 2 do array.
console.log('4 - APAGA O ÚLTIMO ITEM DO ARRAY - array.pop()');
arrayNovo.pop(); // apaga o último item do array;
console.log(arrayNovo);
console.log('');

console.log('5 - ADICIONA UM ITEM AO FINAL DO ARRAY - array.push()');
arrayNovo.push(6); // acrecenta um novo item ao final do array;
console.log(arrayNovo);
console.log('');

console.log('6 - APAGA O ITEM CONTIDO NO SEGUNDO ÍNDICE - array.splice(2,1)');
arrayNovo.splice(2, 1); // apaga o item contido no segundo índice; ( 2 nº do índice, 1 quantidade a ser excluído);
console.log(arrayNovo);