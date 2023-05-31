// 벽: 1미터 길이 구연 n개로 나눔
// 왼쪽부터 1번 ~ n번
// 롤러의 길이: m미터
function solution(n, m, section) {
    let wall = new Array(n).fill(true);
    let answer = 0;
    
    for(let i=0; i<section.length; i++) {
        wall[section[i] - 1] = false
    }
    
    for(let i=0; i<wall.length; i++) {
        if(!wall[i]) {
            for(let j=0; j<m; j++) {
                wall[i+j] = true;
            }
            answer++;
        }
    }
    
    return answer;
}