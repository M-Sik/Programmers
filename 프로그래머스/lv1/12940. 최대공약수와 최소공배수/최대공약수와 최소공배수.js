function solution(n, m) {
    const answer = [0, 0];
    const bigNum = n > m ? n : m;
    for(let i=1; i<= bigNum; i++) {
        // 최소공배수를 구함
        if(n % i === 0 && m % i === 0) answer[0] = i;
    }
    // 최대 공약수를 구함
    answer[1] = (n * m) / answer[0]
    return answer;
}