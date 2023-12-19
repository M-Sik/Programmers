function solution(arr) {
    arr.forEach((v, i) => {
        if((v >= 50) && (v % 2 === 0)) arr[i] = arr[i] / 2;
        else if((v < 50) && (v % 2 !== 0)) arr[i] = arr[i] * 2;
    })
    
    return arr;
}