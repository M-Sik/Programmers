const isPrime = (num) => {
    if(num === 0 | num === 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true
}

function solution(numbers) {
    let answer = [];
    const visited = new Array(numbers.length).fill(false);
    const dfs = (cur) => {
        for(let i=0; i<numbers.length; i++) {
            if(visited[i]) continue;
            
            visited[i] = true;
            dfs(cur + numbers[i]);
            visited[i] = false;
        }
        answer.push(+cur);
    }
    
    dfs("");
    answer = [...new Set(answer)].reduce((acc, cur) => isPrime(cur) ? acc += 1 : acc,0);
    
    return answer;
}