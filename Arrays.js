//ver si un elemento se encuentra dentro de un array
let array = [1, 2, 3, 4, 5];
let Resultado;
Resultado = array.includes(7);
if (Resultado) {
    console.log("El elemento se encuentra en el array");
} else {
    console.log("El elemento no se encuentra en el array");
}

//Elevar los elementos de un array a la potencia y guardar los resultados
//sobre otro array
const numeros = [1, 2, 3, 4, 5];
//Metodo 1:
const nPotencia = numeros.map(n => Math.pow(n, 2));
//Metodo 2:
const nPotencia2 = numeros.map(n => n ** 2);
console.log(nPotencia);
console.log(nPotencia2);

//-----------------------------------------------
//Obtener un elemento seudo aleatorio de un array
var Palabras = ["A", "B", "C", "D"];
var Letra = Palabras[Math.floor(Math.random() * Palabras.length)]
console.log(Letra);

//----------------------------------------
//Remover elementos duplicados de un array
const num = [2, 2, 4, 5, 6, 5, 8, 4, 3];
const valUnicos = num.filter((item, pos) => {
    return num.indexOf(item) == pos;
})
console.log(valUnicos);

//--------------------------
//Sumar elementos de un array
//Metodo 1:
const numerosParaSumar = [2, 3, 5, 6, 8, 9];
const Sum = numerosParaSumar.reduce((acumulado, num) => acumulado += num, 0);
console.log(Sum);
//Metodo 2: OJO mas rollo
let AcumSum = 0;
numerosParaSumar.forEach(element => {
    AcumSum += element;
});
console.log(AcumSum);

//---------------
//Encontrar ultimo elemento de un array
const arrayPrueba = [
    { Id: 1, value: "Hola" },
    { Id: 2, value: "Mundo" },
    { Id: 2, value: "Bienvenidos" },
];
const encontrar = arrayPrueba.reverse().find((a) => a.Id === 2);
console.log(encontrar);

//---------------------------------------
//Crear un array con numeros consecutivos
const arrayConsecutivo = new Array(10).fill(0).map((acc = 0, num) => num += acc++);
console.log(arrayConsecutivo);

//---------------
//Clonar un array
const arr = [2, 3, 5];
const clonarr = [...arr];
console.log(clonarr);