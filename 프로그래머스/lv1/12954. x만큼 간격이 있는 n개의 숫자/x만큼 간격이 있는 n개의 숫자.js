function solution(x, n) {
    // return Array(n).fill(x).map((item, index) => item + item * index)
    var answer = [];
    for(let i=0; i<n; i++) {
        answer.push(x +( x * i))
    }
    return answer;
}