// name: 그리워하는 사람의 이름
// yearning: 각 사람별 그리움 점수
// photo: 사진에 찍힌 인물의 이름이 담긴 이차원 문자열 배열
function solution(name, yearning, photo) {
    let answer = [];
    // 사진속 이름을 탐색해서 배열로 반환
    answer = photo.map((names) => {
        // 사진속 인물중 그리워하는 사람의 이름을 판단하여 점수 누적
        return names.reduce((acc, cur, i) => {
            // 사진속 인물중 그리워하는 사람이 존재한다면
            if(name.indexOf(cur) !== -1) {
                const nameIndex = name.indexOf(cur);
                // 그리워하는 사람의 점수를 누적
                return acc += yearning[nameIndex];
            }
            else return acc += 0;
        }, 0)
    })
    
    return answer;
}