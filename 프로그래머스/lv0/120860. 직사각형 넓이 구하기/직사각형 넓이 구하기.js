function solution(dots) {
    const rowMax = Math.max(...dots.map((item) => item[0]));
    const rowMin = Math.min(...dots.map((item) => item[0]));
    const colMax = Math.max(...dots.map((item) => item[1]));
    const colMin = Math.min(...dots.map((item => item[1])));
    
    return (rowMax - rowMin) * (colMax - colMin);
}