function solution(k, score) {
    let answer = [];
    let topSinger = [];
    
    score.forEach((num, index) => {
        // 출연한 가수 명예에전당 추가
        topSinger.push(num);
        // 명예에 전당 점수 내림차순 정렬
        topSinger = topSinger.sort((a, b) => b-a);
        // 명예에 전당에 있는 가수 수가 k보다 크다면 제일 낮은 점수인 가수 제거
        if(topSinger.length > k) topSinger.pop();
        // 명예에 전당 최신화 후 가장 낮은점수 answer에 추가
        answer.push(topSinger[topSinger.length - 1]);
    })
    
    return answer;
}