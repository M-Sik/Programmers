function solution(n, t, m, p) {
    let answer = '';
    let transformStr = '';
    
    for(let i=0; i<t*m; i++) {
        transformStr += i.toString(n);
    }
    
    for(let i=p-1; i<transformStr.length; i+=m) {
        if(i >= t*m) break;
        answer += transformStr[i].toUpperCase();
    }
    
    return answer;
}
