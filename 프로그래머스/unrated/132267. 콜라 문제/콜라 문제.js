function solution(a, b, n) {
    // 콜라 갯수
    let cokeCount = 0;
    // 콜라 빈병 갯수
    let emptyCokeCount = n;
    // 빈 콜라를 콜라로 바꾼 횟수
    let totalChangeCokeCount = 0;
    
    // 빈병을 콜라로 바꿀 수 있다면 계속 반복
    while(emptyCokeCount >= a) {
        // 최대로 바꿀 수 있는 빈병 수
        let maxEmptyCoke = 0;
        for(let i=1; i<= emptyCokeCount; i++) {
            if(i % a === 0) maxEmptyCoke = i;
        }
        // 반환 받은 콜라
        cokeCount = (maxEmptyCoke / a) * b;
        // 반환 받은 콜라의 수를 누적한다.
        totalChangeCokeCount += cokeCount;
        // 교환 받은 빈병을 기존 빈병수에서 제거한 후 반환받은 콜라의 갯수를 추가
        emptyCokeCount = emptyCokeCount - maxEmptyCoke + cokeCount;
        
    }
    
    return totalChangeCokeCount;
}