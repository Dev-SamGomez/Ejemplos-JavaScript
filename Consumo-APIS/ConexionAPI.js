//Aqui configuramos la estructura de la conexion a la api

let XMLHttp = require('xmlhttprequest').XMLHttpRequest;

const GetData = (api) => {
    return new Promise((resolve, reject) => {
        const Ahttp = new XMLHttpRequest();
        Ahttp.open('GET', api, true);
        Ahttp.onreadystatechange = (() => {
            if (Ahttp.readyState === 4) {
                (Ahttp.status === 200) ?
                resolve(JSON.parse(Ahttp.responseText)):
                    reject(new Error('Error Fatal ', api))
            }
        });
        Ahttp.send();
    });
}

module.exports = GetData;