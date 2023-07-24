function solution(k, tangerine) {
    const obj = {};
    
    // 같은 종이 몇개가 있는지 확인한다.
    tangerine.forEach((n) => {
        // obj[n] 값이 있으면 1을 더한 값을
        // obj[n] 값이 없으면 1을 넣어준다.
        obj[n] = obj[n] ? ++obj[n] : 1;
    });
    const counts = Object.values(obj).sort((a, b) => b - a);
    
    for(let i=0; i<counts.length; i++) {
        k = k - counts[i];
        if(k <= 0) return i + 1;
    }
}