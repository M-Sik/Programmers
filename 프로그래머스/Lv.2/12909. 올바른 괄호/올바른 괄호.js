function solution(s){
    let stack = 0;
    // 제일 앞에 ")"가 있거나 제일 뒤에 "("가 있는경우에는 무조건 false임
    if(s[0] === ")" || s[s.length-1] === "(") return false;
    
    for(let i=0; i<s.length; i++) {
        // "(" 일 경우에는 +1, ")"일 경우에는 -1
        let is = s[i] === "(" ? 1 : -1;
        stack += is 
        // stack이 -1이라는 말은 "(" 없이 ")"가 먼저 나왓다는 말이므로 false
        if(stack === -1) return false;
    }
    // stack이 0이면 괄호 짝이 맞음
    return stack === 0 ? true : false;
}