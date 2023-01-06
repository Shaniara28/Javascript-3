const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        if (!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

let tampilkanMonth = (error, month) => {
    try {
        if (month.length === 0){
            console.log(error);
        } else {
            const tampilkan = month.map((value) => {
                return value;
            });
            console.log(tampilkan);
        }
    } catch (error) {
        console.log(error.message);
    }
}

getMonth(tampilkanMonth);