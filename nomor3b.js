let validation = (beli) => {
    try {
        if (typeof(beli) != "boolean") throw "input harus boolean";
    } catch (err) {
        console.log(err);
    }
}

let membeliHanphoneBaru = (beli) => {
    return new Promise(
        function (resolve, reject) {
            validation(beli);
            if (beli) {
                let phone = {
                    brand: 'samsung',
                    color: 'black'
                };
                resolve(`Ibu membeli handphone merk ${phone.brand} berwarna ${phone.color}`);
            } else {
                let reason = new Error('Ibu tidak jadi membeli handphone');
                reject(reason);
            }
        }
    ); 
}

function askMom(beli) {
    membeliHanphoneBaru(beli)
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

askMom(true);