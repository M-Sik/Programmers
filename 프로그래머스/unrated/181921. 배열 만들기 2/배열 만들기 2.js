function solution(l, r) {
    let answer = [];
    
    for(let i=l; i<=r; i++) {
        const str1 = i.toString();
        let aa = 0;
        
        for(let j=0; j<str1.length; j++) {
            if(str1[j] === '5' || str1[j] === '0') continue;
            else aa = 1;
        }
        aa === 0 && answer.push(i)
    }
    
    return answer.length === 0 ? [-1] : answer;
}