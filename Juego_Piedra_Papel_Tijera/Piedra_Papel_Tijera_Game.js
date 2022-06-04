//Creamos una clase donde definiremos los comandos del juego
let CountWinUser = 0;
let CountWinCPU = 0;
class aNewGame {
    GetOption() {
            //Generamos un array con las opciones disponibles
            var opciones = ["Piedra", "Papel", "Tijera"];
            //Generamos un indice seudo aleatorio para seleccionar con cual opcion
            //jugara la computadora
            var automaticOpcion = opciones[Math.floor(Math.random() * 3)];
            //Tenemos un Div con el Id con nombre 'OpComputadora' en el cual se registrara la opcion de la computadora
            document.getElementById('OpComputadora').innerHTML = "Opcion computadora " + automaticOpcion;
            //Por ultimo, retornamos ese valor para la evaluacion
            return automaticOpcion;
        }
        //En este metodo, enviamos los parametros de la opcion del usuario y la opcion de la computadora
        //Para determinar el ganador del jugador, retornamos el resultado del ganador
    GamePPT(oUsuario, automaticOpcion) {
        if (oUsuario === automaticOpcion) {
            return "Resultado: Empate";
        } else if (oUsuario == "Papel" && automaticOpcion == "Piedra") {
            CountWinUser++;
            return "Resultado: Gana usuario";
        } else if (oUsuario == "Piedra" && automaticOpcion == "Papel") {
            CountWinCPU++;
            return "Resultado: Gana computadora";
        } else if (oUsuario == "Papel" && automaticOpcion == "Tijera") {
            CountWinCPU++;
            return "Resultado: Gana computadora";
        } else if (oUsuario == "Tijera" && automaticOpcion == "Papel") {
            CountWinUser++;
            return "Resultado: Gana usuario";
        } else if (oUsuario == "Piedra" && automaticOpcion == "Tijera") {
            CountWinUser++;
            return "Resultado: Gana usuario";
        } else if (oUsuario == "Tijera" && automaticOpcion == "Piedra") {
            CountWinCPU++;
            return "Resultado: Gana computadora";
        }
    }
}

//Funcion invocada por el boton desde el archivo HTML
function GamePlay() {
    //Iniciamos un nuevo juego
    let game = new aNewGame();
    //Obtenemos la opcion del usuario del div con Id 'OpUsuario'
    const oPlayer = document.getElementById("OpUsuario");
    //Hacemos una constante con el valor obtenido de la opcion del usuario
    const PlayerOption = oPlayer.value;
    //Al juego nuevo generado, enviamos la opcion del usuario y a su vez,
    //enviamos como argumento una nueva opcion de la computadora con el metodo de la clase
    //aNewGame .GetOption() y grabamos el resultado en un div con Id 'texto'
    document.getElementById('texto').innerHTML =
        game.GamePPT(PlayerOption, game.GetOption());
    let resultCount = "Player " + CountWinUser + " - " + CountWinCPU + " CPU";
    document.getElementById('WIN').innerHTML = resultCount;

}