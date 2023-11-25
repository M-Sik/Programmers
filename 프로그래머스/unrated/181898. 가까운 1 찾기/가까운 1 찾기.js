function solution(arr, idx) {
    let answer = -1;
   
    for(let i=idx; i<arr.length; i++) {
        if(arr[i] === 1 && i >= idx) {
            answer = i;
            break;
        }
    }    
    
    return answer;
}