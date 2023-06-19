function solution(n) {
    let answer = 0;
    const initNOneCount = binaryConversion(n);
    let nextNOneCount = 0;
    
    while(answer === 0) {
        n++;
        nextNOneCount = binaryConversion(n);
        
        if(initNOneCount === nextNOneCount) answer = n;
    }
    
    return answer;
}

function binaryConversion (number) {
   return [...number.toString(2)].reduce((acc, cur) => {
        if(cur === "1") return acc + parseInt(cur);
        return acc + 0;
    }, 0);
}