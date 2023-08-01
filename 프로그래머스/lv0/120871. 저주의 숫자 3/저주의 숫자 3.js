function solution(n) {
    var answer = 0;
    
    for(let i=0; i<n; i++) {
        answer++
        while(answer%3===0 || answer.toString().split("").includes("3")) {
            answer++
        }
    }
    
    return answer;
}