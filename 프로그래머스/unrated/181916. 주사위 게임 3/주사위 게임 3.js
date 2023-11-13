function solution(a, b, c, d) {
    var answer = 0;
    let oj = {};
    let arr = [];
    
    oj[a] ? oj[a] += 1 : oj[a] = 1;
    oj[b] ? oj[b] += 1 : oj[b] = 1;
    oj[c] ? oj[c] += 1 : oj[c] = 1;
    oj[d] ? oj[d] += 1 : oj[d] = 1;
    
    arr = Object.entries(oj).sort((a, b) => a[1] - b[1]);

    if(arr.length === 1) return 1111 * a;
    else if(arr.length === 2) {
        if(arr[0][1] === arr[1][1]) return (Number(arr[0][0]) + Number(arr[1][0])) * Math.abs(Number(arr[0][0]) - Number(arr[1][0]));
        else return Math.pow(10 * Number(arr[1][0]) + Number(arr[0][0]), 2);
    } 
    else if(arr.length === 3) return Number(arr[0][0]) * Number(arr[1][0]);
    else return Number(arr[0][0]);
    
    return answer;
}