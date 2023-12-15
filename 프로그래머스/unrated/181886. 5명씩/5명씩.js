function solution(names) {
    const answer = [];
    
    names.forEach((v, i) => {
        i % 5 === 0 && answer.push(v)
    })
    
    return answer;
}