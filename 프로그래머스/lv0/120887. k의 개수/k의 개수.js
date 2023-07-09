function solution(start, end, k) {
    let answer = 0;
    let sik;
    
    for(let i=start; i<=end; i++) {
        sik = [...i.toString()].filter((item) => item == k)
        answer += sik.length
    }
    return answer;
}