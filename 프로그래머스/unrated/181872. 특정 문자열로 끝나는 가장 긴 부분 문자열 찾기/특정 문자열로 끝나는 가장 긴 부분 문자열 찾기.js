function solution(myString, pat) {
    var answer = '';
    
    for(let i=0; i<myString.length; i++) {
        // if(myString[i+1] === pat) continue;
        
        if(!answer.includes(pat) || myString[i] === pat) {
            answer = '';
            for(let j=0; j<=i; j++) {
                answer += myString[j];
            }
        };

    }
    
    return answer;
}