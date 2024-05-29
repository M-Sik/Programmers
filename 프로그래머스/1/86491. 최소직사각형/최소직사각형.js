function solution(sizes) {
    const firstNums = [];
    const secondNums = [];
    
    sizes.forEach((item => {
        if(item[0] < item[1]) item.reverse();
        firstNums.push(item[0]);
        secondNums.push(item[1]);
    }))
    
    return Math.max(...firstNums) * Math.max(...secondNums);
}