function solution(want, number, discount) {
    let answer = 0;
    
    discount.forEach((v, i) => {
        const 할인10개 = discount.slice(i, i+10);
        let count = want.length;
        
        for(let j=0; j<want.length; j++) {
            const 포함된갯수 = 할인10개.filter((f) => f === want[j]).length;
            포함된갯수 === number[j] && count--;
        }
        count === 0 && answer++;
    })
    
    return answer;
}