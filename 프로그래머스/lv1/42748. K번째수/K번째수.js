function solution(array, commands) {
    let answer = [];
    
    for(let i=0; i<commands.length; i++) {
        let splitArr = []
        for(let j=commands[i][0]-1; j<=commands[i][1]-1; j++) {
            splitArr.push(array[j])
        }
        answer = [...answer, splitArr.sort((a, b) => a - b)[commands[i][2]-1]]      
        splitArr = []
    }
    return answer;
}