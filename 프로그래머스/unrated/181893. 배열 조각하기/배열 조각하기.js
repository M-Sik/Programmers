function solution(arr, query) {
    let answer = [...arr];
    
    query.forEach((v, i) => {
        if(i % 2 === 0) {
            answer.splice(v+1);
        } else {
            answer.splice(0, v);
        }
    })
    
    return answer;
}