function solution(k, dungeons) {
    const arr = [];
    const visited = new Array(dungeons.length).fill(false);
    const dfs = (hp, level) => {
        for(let i=0; i<dungeons.length; i++) {
            if(!visited[i] && hp >= dungeons[i][0]) {
                visited[i] = true;
                dfs(hp - dungeons[i][1], level + 1);
                visited[i] = false;
            }
        }
        arr.push(level);
    }
    
    dfs(k, 0);
    const answer = [...new Set(arr)];
    
    return Math.max(...answer);
}