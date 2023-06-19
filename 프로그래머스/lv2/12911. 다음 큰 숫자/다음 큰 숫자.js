function solution(n) {
    let answer = 0;
    const initNOneCount = [...n.toString(2)].reduce((acc, cur) => {
        if(cur === "1") return acc + parseInt(cur);
        return acc + 0;
    }, 0);
    let nextNOneCount = 0;
    
    while(answer === 0) {
        n++;
        nextNOneCount = [...n.toString(2)].reduce((acc, cur) => {
            if(cur === "1") return acc + parseInt(cur);
            return acc + 0;
        }, 0);
        
        if(initNOneCount === nextNOneCount) answer = n;
    }
    
    return answer;
}