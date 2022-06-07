const HelloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hola, este es un mensaje de promesa'), 3000): reject(new Error('Error Fatal'))
    });
};

HelloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Saludo Finalizado'))