
function merge(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return [];
    if (arr1.length === 0 && arr2.length > 0) return arr2; 
    if (arr2.length === 0 && arr1.length > 0) return arr1;

    const result = [];
    let a = 0, b = 0
    let arr1Item = arr1[a];
    let arr2Item = arr2[b];

    while(arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
           result.push(arr1Item);
           a++
           arr1Item = arr1[a]
        }else{
            result.push(arr2Item);
            b++
            arr2Item = arr2[b]
        }
    }

    return result;
}

array1 = [];
array2 = [2, 3, 5, 8, 9, 10];

let res = merge(array1, array2);

console.log(res);