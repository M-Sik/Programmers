function solution(s) {
    let answer = [0, 0];
    
    // console.log(s)
    while(s !== "1") {
        let zeroCount = 0;
        
        for(let i=0; i<s.length; i++) {
            if(s[i] === "0") zeroCount++;
        }
        s = Number(s.replaceAll(0, "").length).toString(2);
        
        answer[0]++;
        answer[1] += zeroCount;
    }
    
    return answer;
}