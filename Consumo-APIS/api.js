const conexion = require('./ConexionAPI');
const API = 'https://rickandmortyapi.com/api/character/';

conexion(API)
    .then(data => {
        console.log(data.info.count)
        return conexion(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return conexion(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));