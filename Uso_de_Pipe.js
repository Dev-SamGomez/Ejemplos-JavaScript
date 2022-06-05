//Iniciamos creando nuestro array de personas, cada una con distintos parametros.
const Personas = [{
        Persona: "Samuel",
        Edad: 23,
        Pais: "Mexico",
    },
    {
        Persona: "Janely",
        Edad: 26,
        Pais: "Mexico",
    },
    {
        Persona: "Pedro",
        Edad: 25,
        Pais: "EU",
    },
    {
        Persona: "Valeria",
        Edad: 22,
        Pais: "Guatemala",
    }
];

//Creamos nuestra funcion para filtrar por edad a cada una de las personas
function SortByAge(Ob) {
    return Ob.sort((age1, age2) => age1.Edad - age2.Edad);
}

//Pasamos todas las letras a pequeñas
function LetterLow(Ob) {
    return Ob.map(Name => {
        Name.Persona = Name.Persona.toLowerCase();
        return Name;
    });
}

//Al final imprimimos, pero el resultado sera esta salida
//console.log(LetterLow(SortByAge(Personas)));

//Para mayor comprension en lectura, el metodo Pipe() funcionade la siguiente forma
//Creamos un array de funcionalidad Pipe.
Array.prototype.pipe = function(...funciones) {
        return funciones.reduce((a, b) => {
            return b(a);
        }, this);
    }
    // Iniciamos nuevas personas con el metodo creado pipe de Personas
const PersonasCreadas = Personas.pipe(
    LetterLow,
    SortByAge
);

console.log(PersonasCreadas);