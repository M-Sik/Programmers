function solution(quiz) {
    const answer = [];
    
    quiz.forEach((item) => {
        const splitArr = item.split(" ");
        let calc = 0;

        if(splitArr[1] === "+") calc = Number(splitArr[0])+Number(splitArr[2]);
        else calc = Number(splitArr[0])-Number(splitArr[2]);
        
        if(calc.toString() === splitArr[splitArr.length - 1]) answer.push("O");
        else answer.push("X")
    })
    return answer;
}