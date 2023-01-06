let validation = (a,b,c) => {
    try {
        if (typeof(a) != "number" || typeof(b) != "number" || typeof(c) != "number") throw "terdapat input yang bukan angka";
    } catch (err) {
        console.log(err);
    }
}

let bagiLima = (a,b,c) => {
    return new Promise((resolve, reject) => {
        validation(a,b,c);
        setTimeout(() => {
            let sum = a + b + c;
            if (sum % 5 == 0){
                resolve(`Hasil adalah ${sum}, angka bisa dibagi 5`);
            } else {
                reject(`Hasil adalah ${sum}, angka tidakbisa dibagi 5`);
            }
            },1000);
        })
}

bagiLima(5,5,10)
.then(result => {
    console.log(result);
})
.catch(fail => {
    console.log(fail);
})