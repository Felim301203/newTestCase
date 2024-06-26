function sortArray(arr) {
    
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr;
}

let inputArray = [5, 3, 6];
console.log("Array setelah diurutkan:", sortArray(inputArray));