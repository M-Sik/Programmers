// k: 사과의 최고점수
// m: 한상자에 담을 사과 수
// 사과 한상자의 가격은 상자안에 가장 낮은가격 * m
function solution(k, m, score) {
    let answer = 0;
    let appleCount = score.length;
    // 내림차순 정렬
    const descScore = score.sort((a, b) => b - a);
    // 사과를 m개씩 담을 배열
    let appleBox = [];
    
    for(let i=1; i<=appleCount; i++) {
        appleBox = [...appleBox, descScore[i - 1]]
        // 사과 박스에 m개씩 담길때마다 가격을 answer변수에 누적
        if(i % m === 0) {
            answer += Math.min(...appleBox) * m
            appleBox = []
        }
    }
    
    return answer;
}