function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s, e, k]) => {
        let temp = [];
        for(let i=s; i<=e; i++) {
            if(arr[i] > k) temp.push(arr[i]);
        }
        answer.push(Math.min(...temp) === Infinity ? -1 : Math.min(...temp));
    })
    
    return answer;
}