function solution(array, commands) {
    const answer = [];
    commands.forEach(([a, b, c]) => {
        const slice = array.slice(a-1, b).sort((a, b) => a-b);
        answer.push(slice[c-1]);
    })
    
    return answer;
}