const Arrayfibonacci = [0,1];

const Fib = (LengthArray) =>{
    for (let i=1; i<LengthArray;i++){
        Arrayfibonacci.push(Arrayfibonacci[i] + Arrayfibonacci[i-1]);
    }
    return new Promise((resolve, reject) => {
        if (LengthArray == Arrayfibonacci.length - 1) {
            resolve(Arrayfibonacci);
        }else {
            reject(new Error('Desafortunadamente, no funciono'));
        }
    });
}

Fib(20)
.then(response => console.log(response))
.catch(error => console.log(error))



