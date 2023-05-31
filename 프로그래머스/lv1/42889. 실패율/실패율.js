function solution(N, stages) {
    var answer = [];
    
    for(let i=1; i<=N; i++) {
        let notClear = 0;
        let curStage = 0;
        
        for(let j=0; j<stages.length; j++) {
            if(stages[j] === i) {
                notClear++;
                curStage++;
                continue;
            }
            else if(stages[j] > i) {
                curStage++;
                continue;
            }
        }
        answer.push({stage: i, failPercent: notClear === curStage ? (curStage === 0 ? 0 : 1) : (notClear / curStage)});
    }
    console.log(answer)
    
    return answer.sort((a, b) => b.failPercent - a.failPercent).map((item) => item.stage);
}