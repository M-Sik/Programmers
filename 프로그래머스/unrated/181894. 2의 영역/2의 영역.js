function solution(arr) {
    let answer = [];
    let indexs = [];
    
    arr.forEach((v, i) => {
        v === 2 && indexs.push(i);
    })
    for(let i=indexs[0]; i<=indexs[indexs.length-1]; i++) {
        answer.push(arr[i]);
    }
    
    return answer.length === 0 ? [-1] : answer;
}