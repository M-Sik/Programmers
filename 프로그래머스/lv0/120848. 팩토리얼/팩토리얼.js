function solution(n) {
    let answer = 0;
    let count = 1;
    
    while(answer < n) {
        let ft = 1;
        
        for(let i=count; i>=1; i--) {
            ft *= i;
        };
        answer = ft;
       
        if(answer > n) break;
        console.log(count,answer)
        count++;
        
        
    }
    return count - 1
}