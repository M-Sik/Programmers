function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (남은피로도, level) => {
        for(let i=0; i<visited.length; i++) {
            if(!visited[i] && 남은피로도 >= dungeons[i][0]) {
                visited[i] = true;
                dfs(남은피로도 - dungeons[i][1], level + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, level);
    }
    dfs(k, 0);
    
    return answer;
}