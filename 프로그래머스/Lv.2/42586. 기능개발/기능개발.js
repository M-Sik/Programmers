function solution(progresses, speeds) {
    const answer = [];
    let restday = [] // 작업에 필요한 일 수

    // 1. 남은날 구하기
    for(let i=0; i<progresses.length; i++){
        restday.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    console.log(restday);
    // 2. 답구하기 
    let count = 1;
    let maxNum = restday[0];
    for(let i=1; i<restday.length; i++) {
        if(maxNum >= restday[i]) count++;
        else {
            answer.push(count);
            maxNum = restday[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}