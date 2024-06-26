function jumlahkanAngka(inputString) {
    inputString = inputString.trim();
    
    let words = inputString.split(" ");
 
    return words.length;
}

let inputText = "Halo Nama Saya Felim";
console.log("Jumlah kata:", jumlahkanAngka(inputText));
