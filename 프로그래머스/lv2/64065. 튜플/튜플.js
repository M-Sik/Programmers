function solution(s) {
    let answer
    let obj = {};
    
    s = s.replaceAll("{", '[').replaceAll("}", ']');
    s = JSON.parse(s);
    
    s.forEach((v) => {
        v.forEach((k) => {
            obj[k] === undefined ? obj[k] = 1 : obj[k]++;
        })
    })
    answer = Object.entries(obj).sort((a, b) => b[1] - a[1]).map(([num, _]) => parseInt(num));
    
    return answer;
}