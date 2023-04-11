function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false;
    let answer = true;
    
    [...s].forEach((val) => {
        if(isNaN(val)) answer = false;
    })
    return answer;
}