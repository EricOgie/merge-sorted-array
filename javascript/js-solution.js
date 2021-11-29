
function merge(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return [];
    if (arr1.length === 0 && arr2.length > 0) return arr2; 
    if (arr2.length === 0 && arr1.length > 0) return arr1;

    result = [];
    let a = 0, b = 0, c=0;
    
    while (a < arr1.length && b < arr2.length) {
        if (arr1[0] < arr2[0]) {
            result[c] = arr1[a]
            a++   
        } else {
            result[c] = arr1[b]
            b++
        }
        c++
    }   

 
}