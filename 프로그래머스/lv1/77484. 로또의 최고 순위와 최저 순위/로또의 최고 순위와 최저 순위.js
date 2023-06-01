function solution(lottos, win_nums) {
    const nonZeroNum = lottos.filter((lotto) => lotto !== 0);
    let matchingNumCount = 0;
    const zeroCount = lottos.length - nonZeroNum.length;
    
    if(nonZeroNum.length === 0) return [1, 6];
    
    nonZeroNum.forEach((num) => {
        if(win_nums.includes(num)) matchingNumCount++;
    })
    
    if(matchingNumCount === 0 && zeroCount === 0) return [6, 6];
    
    return [7 - matchingNumCount - zeroCount, 7-matchingNumCount];
}