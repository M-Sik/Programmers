function solution(arr, intervals) {
    let answer = [];
    
    intervals.forEach(([a, b]) => {
        for(let i=a; i<=b; i++) {
            answer.push(arr[i]);
        }
    })
    
    return answer;
}