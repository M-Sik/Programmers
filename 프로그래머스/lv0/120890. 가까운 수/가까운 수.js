function solution(array, n) {
    array.push(n)
    array.sort((a, b) => a - b);
    console.log(array)
    
    const findIndex = array.findIndex((item) => item === n)
    console.log(array[findIndex - 1], array[findIndex + 1])
    if(array[findIndex + 1] === undefined) return array[findIndex - 1];
    
    return (array[findIndex + 1] - n) >= (n - array[findIndex - 1]) ? array[findIndex - 1] : array[findIndex + 1];
}