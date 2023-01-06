const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukanlah hari kerja"))
            }
        },3000)
    })
    .then((result) => {
        console.log(`${result} adalah hari kerja`);
    })
    .catch((error) => {
        console.log(error.message);
    })
}

const hariKerja = async (day) => {
	try {
		const hari = await cekHariKerja(day);
        console.log(`${hari} adalah hari kerja`)
	} catch (error) {
		console.log(error);
	}
}

// cekHariKerja("jut");
hariKerja("jumat");