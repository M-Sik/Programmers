function solution(price) {
    let answer = 0;
    
    if(price >= 500000) answer = price * 0.80;
    else if(price >= 300000) answer = price * 0.90;
    else if(price >= 100000) answer = price * 0.95;
    else answer = price
    
    return Math.floor(answer)
}