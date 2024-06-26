function buatSegitiga(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}

let jumlahBaris = 5;
console.log(`Output untuk ${jumlahBaris} baris:`);
buatSegitiga(jumlahBaris);