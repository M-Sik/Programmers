function solution(X, Y) {
    let answer = '';
    let xArr = [...X];
    let yArr = [...Y];
    
    for(let i=0; i<10; i++) {
        const curX = xArr.filter(a => Number(a) === i).length
        const curY = yArr.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(curX, curY))
    }
    
    if(answer === '') return "-1"
    else if(Number(answer) === 0) return "0"
    // 내림차순으로 정렬해 반환하면 최댓값
    return [...answer].sort((a, b) => b - a).join("")
}