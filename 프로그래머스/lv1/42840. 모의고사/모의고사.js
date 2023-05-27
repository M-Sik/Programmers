function solution(answers) {
    const one = [1, 2, 3, 4, 5]; // 1번 수포자 찍는 방식
    const two = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번 수포자 찍는 방식
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번 수포자 찍는 방식
    let answerCount = [0, 0, 0]; // 정답 카운트 왼쪽부터 1번, 2번, 3번
    
    answers.forEach((answer, index) => {
        // 수포자들의 정답 비교 후 정답이면 count
        if(answer === one[index % one.length]) answerCount[0]++;
        if(answer === two[index % two.length]) answerCount[1]++;
        if(answer === three[index % three.length]) answerCount[2]++;
    })
    // 가장 많이 맞춘 정답 수
    const max = Math.max(...answerCount);
    // 가장 많이 맞춘 수포자 배열
    let answer = [];
    // 수포자 배열 순회
    answerCount.forEach((item, index) => {
        // 가장 많이 맞춘 정답수와 수포자의 정답수가 같다면 정답 배열에 추가
        if(item === max) answer.push(index + 1);
    })
    
    return answer;
}