function findMostFrequentLetter(word) {
 
    let frequency = {};
    
   
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }
    
    
    let mostFrequentLetter = '';
    let maxFrequency = 0;
    
    for (let letter in frequency) {
        if (frequency[letter] > maxFrequency) {
            maxFrequency = frequency[letter];
            mostFrequentLetter = letter;
        }
    }
    
    return mostFrequentLetter;
}

let inputWord = "Felim Fe";
let result = findMostFrequentLetter(inputWord);
console.log("Huruf yang paling sering muncul:", result);
