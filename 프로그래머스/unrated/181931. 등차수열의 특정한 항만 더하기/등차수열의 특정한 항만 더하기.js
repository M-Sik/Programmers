function solution(a, d, included) {
    let answer = 0;
    let sum = 0;
    
    included.forEach((v, i) => {
        i === 0 ? sum += a : sum += d;
        if(v) answer += sum;
    })
    
    return answer;
}