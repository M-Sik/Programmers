function solution(num, total) {
    const answer = new Array(num).fill(0);
    
    if(total % num === 0) {
        answer[Math.floor(num / 2)] = total / num;
    
        for(let i=0; i<num; i++) {
            answer[i] = (total / num) - (Math.floor(num / 2) - i)
        }
    }
    else {
        answer[Math.floor(num / 2)] = Math.ceil(total/num);
        
        for(let i=0; i<num; i++) {
            answer[i] = (Math.ceil(total/num)) - (Math.floor(num / 2) - i)
        }
    }    
        
    return answer;
}