const isPrimeNumber = (number) => {
    if(number <= 1) return false;
    for(let i=2; i<=Math.sqrt(number); i++) {
        if(number % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    // n을 k진수로 변환 및 0을 기준으로 나눠 배열로 저장
    const numbers = n.toString(k).split("0")
    
    numbers.forEach((number) => {
        // 해당 숫자가 소수라면 answer 증가
        if(number !== '' && isPrimeNumber(parseInt(number))) answer++;
    })
    
    return answer;
}