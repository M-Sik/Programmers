function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.forEach((v) => {
        const splitNum = Number(v.split('').splice(s, l).join(''));
        splitNum > k && answer.push(splitNum);
    })
    
    return answer;
}