function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i++) {
        if(n % i === 0) answer = [...answer, i]
    }
    return answer.reduce((acc, cur) => acc + cur, 0);
}