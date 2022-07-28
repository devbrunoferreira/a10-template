
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

console.log('2 - ARRAY ORDENADO');
console.log(arrayNumeros.sort());
console.log('');

console.log('3 - ARRAY REVERSE');
console.log(arrayNumeros.reverse());
console.log('');

let arrayNovo = arrayNumeros.slice().sort();
//3. Remova o último item do array, e em seguida, adicione o número 6.
//	Depois, remova o número que está no índice 2 do array.
arrayNovo.pop();
console.log(arrayNovo);
arrayNovo.push(6);
console.log(arrayNovo);
arrayNovo.splice(2, 1);
console.log(arrayNovo);