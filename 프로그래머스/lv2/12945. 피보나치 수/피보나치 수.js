function solution(n) {
    const fibonacciNum = getFibonacci(n);
    
    return fibonacciNum;
}

function getFibonacci(num) {
    let fibonacciArr = [0, 1, 1];
    const dividerNum = 1234567;
    
    if(num === 2) return 1;
    
    for(let i=3; i<=num; i++) {
        fibonacciArr.push((fibonacciArr[i-1] + fibonacciArr[i-2]) % dividerNum);
    }
    
    return fibonacciArr.pop()
}