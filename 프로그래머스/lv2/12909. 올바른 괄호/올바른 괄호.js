function solution(s){
    let stack = 0;
    
    if(s[0] === ")" || s[s.length-1] === "(") return false;
    
    for(let i=0; i<s.length; i++) {
        stack += s[i] === "(" ? 1 : -1;
        if(stack === -1) return false;
    }

    return stack === 0 ? true : false;
}