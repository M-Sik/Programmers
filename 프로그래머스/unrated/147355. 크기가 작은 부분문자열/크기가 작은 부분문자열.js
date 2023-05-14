function solution(t, p) {
    const answer = [];
    const pNum = parseInt(p)
    
    for(let i=0; i<t.length; i++) {
        if((p.length - 1) >= (t.length - i)) continue;
        let setNum = ""
        for(let j=0; j<p.length; j++) {
            setNum += t[i+j]
        }
        answer.push(parseInt(setNum))
    }
    
    return answer.reduce((acc, cur) => cur <= pNum ? acc + 1 : acc + 0, 0);
}