function solution(dots) {
    let answer = 0;
    const rowMax = Math.max(...dots.map((item) => item[0]));
    const rowMin = Math.min(...dots.map((item) => item[0]));
    const colMax = Math.max(...dots.map((item) => item[1]));
    const colMin = Math.min(...dots.map((item => item[1])));
    
    answer = (rowMax - rowMin) * (colMax - colMin)
    
    return answer;
}