function solution(numLog) {
    let answer = '';
    
    for(let i=0; i<numLog.length; i++) {
        if(i === numLog.length-1) continue;
        
        if(numLog[i] + 1 === numLog[i+1]) answer += 'w';
        else if(numLog[i] - 1 === numLog[i+1]) answer += 's';
        else if(numLog[i] + 10 === numLog[i+1]) answer += 'd';
        else answer += 'a';
    }
    
    return answer;
}