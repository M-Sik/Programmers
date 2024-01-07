function solution(genres, plays) {
    const answer = [];
    const map = new Map();
    // 노래 장르별 총 재생횟수 계산
    genres.forEach((genre, i) => {
        if(!map.get(genre)) map.set(genre, plays[i]);
        else map.set(genre, map.get(genre) + plays[i]);
    })
    // 노래 장르별 재생횟수가 많은 순으로 정렬
    const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
    // 노래별 장르, 재생횟수, 인덱스 배열 생성
    const allInfo = genres.map((genre, i) => ({genre, "plays": plays[i], "index": i}));
    // 노래 장르별 반복
    for(let [k, _] of sortedMap) {
        // 장르에 맞는 노래 정보를 담을 배열 생성
        const arr = [];
        // 노래별 반복을 하며 장르가 같을경우 배열에 추가
        allInfo.forEach((info) => {
            if(k === info.genre) arr.push(info);
        })
        // 장르에 맞는 노래 정보를 담은 배열에서 재생횟수 기준 내림차순 정렬
        arr.sort((a, b) => b.plays - a.plays);
        // 각 장르별 재생순위가 높은 2개 노래 2개씩 정답 배열에 추가
        arr.forEach((info, i) => {
            i < 2 && answer.push(info.index);
        })
    }
    
    return answer;
}