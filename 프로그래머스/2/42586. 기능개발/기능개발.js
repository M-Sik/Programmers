function solution(progresses, speeds) {
    const answer = [];
    const 남은작업량들 = progresses.map((progresse) => 100 - progresse);

    // 작업에 필요한 소요일수
    const 작업소요일수 = [];
    남은작업량들.forEach((작업량, i) => {
        let 남은작업량 = 작업량;
        let 소요일 = 0;
        while(작업량 > 0) {
            작업량 -= speeds[i];
            소요일++;
        }
        작업소요일수.push(소요일);
    })
    let 배포갯수 = 0;
    let 오래걸리는업무 = 작업소요일수[0];
    작업소요일수.forEach((작업소요일, i) => {
        if(오래걸리는업무 >= 작업소요일) {
            배포갯수++;
        } else {
            오래걸리는업무 = 작업소요일;
            answer.push(배포갯수);
            배포갯수 = 1;
        }
        // console.log(배포갯수);
    })
    answer.push(배포갯수);
    
    return answer;
}