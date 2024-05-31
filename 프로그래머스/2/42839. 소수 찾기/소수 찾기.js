const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    const temp = [];
    const strs = [...numbers];
    const visited = new Array(numbers.length).fill(false);
    const dfs = (cur) => {
        for(let i=0; i<numbers.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                dfs(cur + strs[i]);
                visited[i] = false;
            }
        }
        temp.push(+cur)
    }
    
    dfs("")
    const a = [...new Set(temp)];
    a.forEach((item) => {
        if(isPrime(item)) answer++;
    })
    
    return answer;
}