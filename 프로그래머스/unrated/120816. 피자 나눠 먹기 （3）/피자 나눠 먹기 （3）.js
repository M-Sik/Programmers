function solution(slice, n) {
    let answer = 1;
    let sliceNum = slice;
    if(slice > n) return answer;
    
    while(sliceNum < n) {
        answer += 1;
        sliceNum += slice
    }
    return answer;
}