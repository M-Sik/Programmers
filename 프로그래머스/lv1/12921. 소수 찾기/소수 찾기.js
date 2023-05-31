function solution(n) {
    let arr = Array(n+1).fill(true)

    for(let i=2; i<=Math.sqrt(n); i++) {
        for(let j=i*2; j<=n; j+=i) {
            arr[j] = false
        }
    }
    return arr.filter(item => item === true).length -2;
    
}